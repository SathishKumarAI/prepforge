---
qid: ing_a21f530b94__star__local
question: 'Explain: Evaluate your LLM App — GitHub - vibrantlabsai/ragas: Supercharge
  Your LLM Application Evaluations \ud83d\ude80 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 449
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:49-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with launching a chatbot for our customer support portal that needed to answer technical queries with high accuracy and low latency. The initial prototype used a vanilla GPT‑4 model, but early user tests showed an 18 % drop in satisfaction due to hallucinations and delayed responses.

**Task:**  
I had to build a robust evaluation framework to benchmark the LLM’s performance across correctness, relevance, safety, and speed before we rolled it out to production. The goal was to reduce hallucination rates below 5 % while keeping inference time under 800 ms.

**Action:**  
I integrated the **ragas** library from GitHub (vibrantlabsai/ragas) into our CI pipeline. First, I curated a balanced test set of 1,200 real support tickets and generated prompts for each. Using ragas, I ran the following evaluations:  
- *Correctness* via BLEU and ROUGE against verified answers;  
- *Relevance* using cosine similarity on embeddings from Sentence‑Transformers;  
- *Safety* with a custom toxicity classifier (OpenAI’s Moderation API);  
- *Latency* by instrumenting OpenAI’s endpoint calls.  

I iterated over prompt engineering, added retrieval augmentation with Pinecone, and fine-tuned the model on a subset of our data. The ragas reports guided hyperparameter tuning and prompted us to switch from GPT‑4 to GPT‑3.5‑Turbo + retrieval for cost efficiency.

**Result:**  
After three evaluation cycles, hallucination dropped to 2.7 %, relevance scores improved by 12 % (ROUGE‑L from 0.62 to 0.70), and average latency fell to 680 ms. User satisfaction rose from 78 % to 91 %. I learned that a structured, open‑source evaluation stack like ragas not only quantifies model quality but also accelerates iteration by providing actionable metrics in a single dashboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
