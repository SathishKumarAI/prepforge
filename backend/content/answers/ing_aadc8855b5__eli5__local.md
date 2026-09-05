---
qid: ing_aadc8855b5__eli5__local
question: 'Explain: Cells, AZs, and replication — Kora: The Cloud Native Engine for
  Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 212
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:54-05:00'
sources: []
---

Imagine a city that runs on a single power plant (your Kafka cluster). In Kora, the city is split into **cells**—small neighborhoods where all the local streetlights (Kafka partitions) are managed together. Each cell lives in its own **Availability Zone (AZ)**, like a separate district with its own backup generator; if one zone’s generator fails, the other districts keep lighting up.

To make sure no single power outage blinds the whole city, Kora **replicates** every streetlight to another district. Think of each light having a twin in a neighboring neighborhood—if one twin goes dark, the other keeps the street illuminated. This mirroring guarantees that even if an entire AZ goes offline, your Kafka data remains bright and reachable. In short: cells = local neighborhoods, AZs = separate districts with backup generators, replication = duplicate streetlights for fail‑safe continuity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
