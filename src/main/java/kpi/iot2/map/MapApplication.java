package kpi.iot2.map;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@SpringBootApplication
public class MapApplication {

	private final static String QUEUE_NAME = "map01-queue";

	public static void main(String[] args) {
		SpringApplication.run(MapApplication.class, args);
	}

}
