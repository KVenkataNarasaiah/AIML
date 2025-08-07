int relayPin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW);
}

void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    if (cmd == "ON") {
      digitalWrite(relayPin, HIGH);
    } else if (cmd == "OFF") {
      digitalWrite(relayPin, LOW);
    }
  }
}
