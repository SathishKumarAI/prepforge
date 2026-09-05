---
qid: ing_9cdb83c76e__eli5__local
question: 'Explain: Class KafkaConsumer<K,V> — KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 252
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:58-05:00'
sources: []
---

**KafkaConsumer\<K, V\>** is a Java “tool” that reads messages from an Apache Kafka topic.  
Think of it as a **mailbox** that delivers letters (messages) to your program.  

* **Kafka** is the post office where many mailboxes live; each mailbox can hold many letters.  
* A **topic** is like a specific mailbox folder (e.g., “orders”).  
* The **consumer** opens that folder and pulls out letters one by one.

The two type parameters, **K** and **V**, are the *type of the letter’s address* and *the type of the letter’s body*. For example, if you expect the key to be a string (like a user ID) and the value to be JSON data, you would declare `KafkaConsumer<String, String>`.

When you call its methods (`poll()`, `subscribe()`), it talks to Kafka, fetches new letters that match your subscription, and gives them back as objects of those types. That’s all it does—just a reliable reader for streaming data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
