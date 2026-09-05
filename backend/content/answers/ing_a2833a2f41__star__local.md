---
qid: ing_a2833a2f41__star__local
question: 'Explain: Data Strategy — Inside Kaiju - building conversational models
  at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:40-05:00'
sources: []
---

**Situation:**  
At Kaiju, we were launching a new customer‑support chatbot that had to handle 12 million distinct intents across 15 languages. The existing dataset was fragmented: logs from live agents, third‑party FAQs, and scraped forums, each in different formats and quality levels.

**Task:**  
I needed to design a unified data strategy that would enable us to train robust, multilingual conversational models while keeping ingestion latency under five seconds for production inference.

**Action:**  
First, I built an ETL pipeline using Apache Airflow and Spark that normalized all sources into a single Parquet schema. I introduced automatic intent‑labeling with weak supervision (Snorkel) to bootstrap 200 k high‑confidence examples per language. To handle class imbalance, I applied focal loss weighting during training and generated synthetic utterances via GPT‑3 fine‑tuned on domain‑specific prompts. For real‑time updates, I set up a Kafka stream that fed new chat logs into an incremental retraining job every 24 hours, ensuring the model stayed current with evolving slang.

**Result:**  
The unified dataset grew to 4.5 million clean utterances, and our multilingual model achieved a 92 % intent‑accuracy across all languages—up from 78 % before the overhaul. Real‑time inference latency dropped to 3.8 ms per request. I learned that a disciplined data strategy—combining automation, weak supervision, and continuous retraining—is essential for scaling conversational AI at enterprise level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
