---
qid: ing_6aaa661fc4__star__local
question: What actually happens during supervised fine-tuning? What role do chat templates
  and special tokens play?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 396
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:49-05:00'
sources: []
---

**Situation:**  
I was working on a startup’s customer‑support chatbot that needed to answer product questions more accurately than the base GPT model could provide. Our internal metrics showed a 30 % drop in user satisfaction for technical queries, and we had a two‑month sprint deadline before the next quarterly release.

**Task:**  
Fine‑tune the pretrained language model on our proprietary support logs so that it would generate concise, brand‑consistent responses while correctly handling product terminology. I also needed to ensure the system could distinguish between user intent and internal debugging commands during inference.

**Action:**  
I curated a balanced dataset of 12 k turn pairs from live chat transcripts, then wrapped each example in a custom chat template: `"<|user|>{user_msg}<|assistant|>"`. This explicit role tokening let the model learn distinct output styles. I added a special `<|product_info|>` token to signal when product specs should be referenced. During training, I used the Hugging Face Trainer with a cross‑entropy loss that ignored padding and the new tokens, and applied differential learning rates—lower for the base layers, higher for the newly inserted embeddings—to prevent catastrophic forgetting. I also ran validation against a held‑out set of 1 k queries to monitor BLEU and exact‑match scores.

**Result:**  
After three weeks, the fine‑tuned model achieved a 42 % improvement in accuracy on technical queries (from 68 % to 98 %) and cut average response time by 15 %. The chat template and special tokens were critical: they reduced hallucinations by 18 % and made it easier for future engineers to add new intent categories without retraining the entire model. This experience taught me that thoughtful prompt engineering and token design are as important as the underlying weights in supervised fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
