---
qid: ing_3a582084cd__eli5__local
question: 'Explain: Produce records with string data — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 240
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:41-05:00'
sources: []
---

Imagine you’re sending postcards through a friendly post office that speaks only in letters and numbers (the REST API). Each postcard is a *record* with a *key* (who it’s from) and a *value* (what you wrote). In Kafka, those postcards go into a *topic*, like a mailbox where many people can read them. 

The Confluent REST Proxy is the post office clerk: you hand it a simple JSON message that looks like  

```json
{
  "key":   "user123",
  "value": "Hello, world!"
}
```

It converts this postcard into Kafka’s binary format and drops it in the right topic. The “string data” part means both key and value are plain text, so anyone can read them without decoding. You just send a POST request to the proxy’s `/topics/<topic>` endpoint; the clerk takes care of the rest. This lets you produce records from any language or tool that can talk HTTP, even if it doesn’t know Kafka’s internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
