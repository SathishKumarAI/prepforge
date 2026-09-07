---
qid: ing_61fb3fb644__aws__local
question: What is loss masking in SFT, and why do you mask the prompt tokens?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 606
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:10-05:00'
sources: []
---

**Context (S)**  
In my last role I led a team that built an open‑source chatbot on Amazon SageMaker for a fintech client. We needed to fine‑tune a transformer model with supervised data while keeping the prompt hidden from the loss function so that the model learns only to generate *responses*.

**Task (T)**  
Implement “loss masking” in the training loop and justify why we mask prompt tokens.

**Action (A)**  

1. **Masking logic** – I added a binary `attention_mask` where positions belonging to the user prompt were set to 0, all other tokens to 1. The loss was computed only over the masked positions using PyTorch’s `CrossEntropyLoss(reduction='none')`, then multiplied by the mask and averaged.  
2. **AWS stack** – Trained on SageMaker JumpStart with a `ml.p3dn.24xlarge` instance (8 V100 GPUs). We used S3 for dataset storage, Step Functions to orchestrate data preprocessing → training → evaluation, and CloudWatch for real‑time loss metrics.  
3. **Scalability & cost** – By masking prompts we avoided back‑propagating through the entire sequence (~1.5× shorter per batch), reducing GPU memory usage by ~30 % and cutting spot‑instance costs from $12/hr to $8/hr.  

**Result (R)**  
After 3 epochs, validation perplexity dropped from 35.2 → **28.7** (≈18 % improvement). The model’s response quality, measured via BLEU‑4 against ground truth, rose from 0.42 to **0.53**, a 26 % relative gain.  

---

### Why mask the prompt?  
- **Focus learning on generation**: Prompt tokens are known; we don’t want the model to learn to copy them.  
- **Prevent exposure bias**: By not penalizing incorrect prompt predictions, we reduce over‑fitting to training prompts.  
- **Efficient gradients**: Skipping prompt positions speeds up back‑propagation and lowers GPU memory footprint.

---

### Leadership Principles Highlighted  

- **Customer Obsession** – Delivered a higher‑quality chatbot that reduced support tickets by 12 %.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility, from data pipeline to inference latency, iterating on mask implementation until loss curves stabilized.  

> *Bar‑raiser check*: I quantified impact (perplexity & BLEU), demonstrated deep technical understanding of transformer training dynamics, and learned that early masking experiments caused gradient spikes—resolved by clipping gradients before masking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
