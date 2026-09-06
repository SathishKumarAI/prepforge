---
qid: ing_aafdeff9ea__think__local
question: 'Explain: Quickstart (v3 API) — GitHub - confluentinc/kafka-rest: Confluent
  REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 750
total_tokens: 963
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:19:17-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- The user wants a *quick‑start* guide for **v3 API** of the Confluent REST Proxy (GitHub repo: `confluentinc/kafka-rest`).
- Assume they have Docker/Compose, Kafka cluster, and basic familiarity with REST.
- Goal: explain what the quick‑start does, how to run it, key endpoints, and a minimal example.

---

**2️⃣ Mental model / framework**

1. **Architecture** – REST Proxy → Kafka broker(s).  
2. **Docker Compose stack** – services: `kafka`, `zookeeper`, `rest-proxy`.  
3. **v3 API concepts** – topics, producers, consumers, config endpoints.  
4. **Typical workflow** – create topic → produce message → consume message.

---

**3️⃣ Step‑by‑step reasoning**

| Step | What to do | Why it matters |
|------|------------|----------------|
| 1. Clone repo & navigate to `quickstart` folder | Pull the exact v3 example files | Ensures we use the right API version |
| 2. Run `docker-compose up -d` | Starts Zookeeper, Kafka, and REST Proxy | Provides a ready environment |
| 3. Verify services (`curl http://localhost:8082/`) | Checks proxy health | Confirms stack is running |
| 4. Create topic via POST `/topics/{topicName}` | v3 API expects JSON body with partitions & replication | Needed before producing |
| 5. Produce a message (`POST /topics/{topicName}/partitions/0/messages`) | Use `{"value":"Hello"} ` | Sends data to Kafka |
| 6. Create consumer group (`POST /consumers/{groupId}`) → get `base_uri` | v3 uses dynamic base URI per consumer | Enables polling |
| 7. Subscribe (`POST {base_uri}/subscription`) with topic list | Tells proxy which topics to read | Activates consumption |
| 8. Poll messages (`GET {base_uri}/records?timeout=1000`) | Retrieve produced data | Completes the round‑trip |
| 9. Clean up (DELETE consumer, delete topic) | Keeps cluster tidy | Good practice |

---

**4️⃣ Common traps to avoid**

- **Wrong port** – REST Proxy runs on `8082` by default; using `9092` will hit Kafka directly.
- **Missing JSON body** – v3 API strictly validates request payloads; empty bodies cause 400 errors.
- **Consumer base URI mis‑use** – each consumer gets its own URL; reusing the wrong one leads to “not found”.
- **Timeout too low** – polling with `timeout=0` returns immediately, possibly no records.

---

**5️⃣ Sanity‑check & communicate**

1. After each curl call, check HTTP status (`200 OK`, `201 Created`).  
2. Inspect returned JSON for keys like `offset`, `topic`, `value`.  
3. If something fails, read the log from `docker logs rest-proxy` – useful error messages.  

When explaining to someone else, walk them through the Docker compose run, then demo each API call in order, highlighting the request/response structure and pointing out the v3‑specific fields (e.g., `records`, `base_uri`). This concrete flow demonstrates both the quick‑start setup and the core of the v3 REST Proxy API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
