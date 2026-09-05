---
qid: ing_e1deb6c207__star__local
question: Full fine-tuning vs. parameter-efficient fine-tuning - how do you choose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:38-05:00'
sources: []
---

**Situation**  
At my last gig we were building a conversational agent for a financial client. Their existing LLM was great at general chit‑chat but fell short on regulatory compliance and domain jargon. The product deadline was six weeks and our compute budget could only support one GPU instance per training run.

**Task**  
I had to decide whether to do full fine‑tuning of the base model or a parameter‑efficient approach (PEFT) like LoRA, while keeping inference latency under 200 ms on a single NVIDIA A10.

**Action**  
First I benchmarked the baseline model: it hit 85% compliance accuracy but lagged behind at 70% in domain‑specific query understanding. I ran a quick prototype with LoRA (rank=8) and found that we could reach comparable performance with only 1 M trainable params versus the full 200 M of the base. I also set up a continuous integration pipeline to run nightly validation on our compliance dataset, so any drift could be caught early. When I had to hit the deadline, I staged the LoRA adapters and froze the backbone, which cut training time from 48 h to 12 h and kept GPU usage low.

**Result**  
The PEFT solution raised domain accuracy to 88% while keeping compliance at 86%, a net +3% over full fine‑tuning. Latency stayed at 180 ms, and we saved $1,200 in cloud compute that month. I learned that the right trade‑off is often “train less but still reach target metrics,” especially when hardware constraints loom large.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
