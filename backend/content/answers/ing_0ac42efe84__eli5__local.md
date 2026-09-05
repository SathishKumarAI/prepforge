---
qid: ing_0ac42efe84__eli5__local
question: 'Explain: Installation — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 255
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:52:33-05:00'
sources: []
---

Imagine you’re building a bridge that lets people (your apps) walk from one side of a river (the internet) to the other side (a Kafka cluster) without getting wet. The **Confluent REST Proxy** is that bridge—it turns ordinary web requests into messages that Kafka can understand.

To set it up, you first grab the bridge plans from GitHub:  
1. Open your terminal and run `git clone https://github.com/confluentinc/kafka-rest.git` – this copies the code to your computer.  
2. Move into the folder with `cd kafka-rest`.  
3. Build the bridge with Maven (`mvn clean package`) or Docker (`docker build -t confluent/kafka-rest .`).  
4. Finally, start it (`java -jar target/kafka-rest-*.jar` or `docker run ...`).

Once running, any REST call you make (e.g., POST /topics/my‑topic) is automatically forwarded to Kafka as a message, letting your app talk to the cluster in plain HTTP instead of Kafka’s own protocol.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
