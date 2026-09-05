---
qid: ing_05b60c37a9__eli5__local
question: What are MQA and GQA, and why do they exist?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 354
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:44:25-05:00'
sources: []
---

Think of a transformer model as a busy conference hall where every speaker (token) can shout at every other speaker to get information.  
In the original “full attention” setup, each pair of speakers talks directly—great for small halls but quickly overcrowded as the room grows.

**MQA – Multiple‑Query Attention** is like giving each speaker a *shortlist* of microphones: one microphone per group of topics instead of one per person. Each speaker uses only a few “query” microphones to collect relevant info, so the number of conversations stays small and the model runs faster while still catching most important signals.

**GQA – Global‑Query Attention** is similar but takes it further: there is a *single* microphone that captures the whole room’s chatter at once. All speakers listen to this common source for broad context, then refine with local microphones if needed. This saves even more computation and lets very large models handle long texts efficiently.

Both tricks exist because full attention becomes too expensive as data grows. By reducing how many pairwise talks happen—either by grouping queries (MQA) or using a shared global query (GQA)—models keep their speed and memory demands reasonable while still understanding the text well.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
