package kpi.iot2.map;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.IOException;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.TimeoutException;

@Controller
public class WebController {

    private Channel channel;

    public WebController() {
        ConnectionFactory factory = new ConnectionFactory();

        try {
            factory.setUri("amqp://sqtwtumb:wBC-z_rAxK60gLLqdJ7gsy72atyCFZ2h@chinook.rmq.cloudamqp.com/sqtwtumb");
        } catch (URISyntaxException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }

        //Recommended settings
        factory.setRequestedHeartbeat(30);
        factory.setConnectionTimeout(30000);

        Connection connection = null;

        try {
            connection = factory.newConnection();
            channel = connection.createChannel();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (TimeoutException e) {
            e.printStackTrace();
        }


    }

    private final static String QUEUE_NAME = "map01-queue";



    /*
     * Nastavenia @Value tahane z application.properties
     * */
    @GetMapping("/openlab_screen")
    public String showAsOpenlabScreen(@Value("${GENERAL_BROKER}") String broker,
                                      @Value("${GENERAL_TOPIC}") String topic,
                                      @Value("${GENERAL_PORT}") int port,
                                      @Value("${OPENLAB_CLIENT_ID}") String clientId,
                                      Model model) {
        model.addAttribute("broker", broker);
        model.addAttribute("topic", topic);
        model.addAttribute("port", port);
        model.addAttribute("clientId",clientId);
        return "openlab_screen";
    }



    @GetMapping("/text_input")
    public String showPageWithTextInput(@Value("${GENERAL_BROKER}") String broker,
                                      @Value("${GENERAL_TOPIC}") String topic,
                                      @Value("${GENERAL_PORT}") int port,
                                      @Value("${TEXT_CLIENT_ID}") String clientId,
                                      Model model) {
        model.addAttribute("broker", broker);
        model.addAttribute("topic", topic);
        model.addAttribute("port", port);
        model.addAttribute("clientId", clientId);

        return "text_input";
    }

    @PostMapping("/test/shared_input")
    @ResponseStatus(HttpStatus.OK)
    //public void receiveOpenlabData(@RequestBody RecognitionMessage payload){
    public void receiveOpenlabData(@RequestBody String payload){
        try {
            channel.queueDeclare(QUEUE_NAME, false, false, false, null);
            String message = payload;
            channel.basicPublish("", QUEUE_NAME, null, message.getBytes());
            System.out.println(" [x] Sent '" + message + "'");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
