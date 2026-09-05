---
qid: ing_3a582084cd__think__local
question: 'Explain: Produce records with string data — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 555
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:43:24-05:00'
sources: []
---

**How to Produce String‑Data Records via Confluent’s Kafka REST Proxy**

1. **Clarify the goal & assumptions**  
   *You want to send plain‑text or JSON messages to a Kafka topic using HTTP instead of a native client.*  
   Assume you have:  
   - A running Kafka cluster exposed through the REST proxy (default host `localhost:8082`).  
   - A topic already created, e.g. `my-topic`.  

2. **Mental model**  
   The REST proxy turns an HTTP POST into a Kafka producer request.  
   *Endpoint* → `/topics/<topic>`  
   *Payload* → JSON describing the record(s) (key/value).  
   *Headers* → `Content-Type: application/vnd.kafka.<format>.v2+json`.  

3. **Step‑by‑step reasoning**  
   1. Choose the media type (`plain` for raw string, `avro`, `json`).  
   2. Build a JSON body:  
      ```json
      {
        "records": [
          {"value":"Hello, Kafka!"}
        ]
      }
      ```
   3. Send an HTTP POST to `http://<proxy-host>:8082/topics/my-topic` with the header above and the body.  
   4. The proxy returns a 200 OK with details of the produced record (partition, offset).  

4. **Common pitfalls**  
   * Wrong `Content-Type` → 415 Unsupported Media Type.  
   * Sending raw text without JSON wrapper → 400 Bad Request.  
   * Not URL‑encoding the topic name if it contains special chars.  

5. **Sanity check & verbal walk‑through**  
   • Verify the proxy’s `/topics/` endpoint is reachable (e.g., `curl -X GET http://localhost:8082/topics`).  
   • Use `curl -i -X POST ...` to see status codes and headers.  
   • If you get a 200, read the JSON response; it should contain `"partition"` and `"offset"`.  

By following this pattern—pick format → build proper JSON → correct headers → POST—you’ll reliably produce string data records through the Kafka REST Proxy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
