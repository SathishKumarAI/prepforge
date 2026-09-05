---
qid: ing_0ac42efe84__fp__local
question: 'Explain: Installation — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 606
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:28:18-05:00'
sources: []
---

**Why you need the Confluent REST Proxy**

Kafka speaks a binary protocol that clients must implement; most languages already have native drivers, but many lightweight services (Python scripts, web front‑ends, micro‑services in Go) prefer HTTP/JSON. The REST proxy exposes a *stateless* RESTful façade over Kafka, turning every topic into an HTTP endpoint while preserving exactly the semantics of Kafka’s producer/consumer APIs.

**Why it must be installed from GitHub**

Confluent’s official Docker images are pre‑built, but for development or custom builds you need the source. The repository contains:

- `Dockerfile` (the build recipe)
- `config/server.properties` (default config)
- `build.gradle` / `pom.xml` (Maven/Gradle wrappers)

These artifacts allow you to *reproducibly* compile a version that matches your local Kafka cluster or to patch the proxy before Confluent’s release cycle.

**Installation from source – step‑by‑step**

1. **Clone the repo**  
   ```bash
   git clone https://github.com/confluentinc/kafka-rest.git
   cd kafka-rest
   ```

2. **Build the Docker image (recommended)**  
   ```bash
   docker build -t confluentinc/kafka-rest .
   ```
   *Why this works:* The Dockerfile pulls a base JDK, copies the compiled artifacts (`rest-proxy-*.jar`), and exposes port 8082. Docker guarantees identical runtimes across machines.

3. **Configure**  
   Copy `config/server.properties.example` to `config/server.properties`. Edit:
   - `bootstrap.servers=broker:9092`
   - `zookeeper.connect=zoo:2181` (if you use ZooKeeper)
   - Any authentication/ACL settings.

4. **Run**  
   ```bash
   docker run -d --name kafka-rest \
     -p 8082:8082 \
     -v $(pwd)/config/server.properties:/etc/kafka/rest-proxy.properties \
     confluentinc/kafka-rest
   ```
   The container mounts the config, ensuring your custom settings survive restarts.

5. **Verify**  
   ```bash
   curl http://localhost:8082/v3/cluster/topics
   ```
   A JSON list of topics confirms the proxy is connected.

**Non‑obvious insight**

The REST proxy’s *stateless* nature means it can be horizontally scaled simply by running more containers behind a load balancer. Because each request contains all necessary authentication and transaction metadata, the proxy never stores session state—this eliminates the “sticky sessions” problem common in HTTP services and lets you scale Kafka‑centric APIs without re‑architecting your backend.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
