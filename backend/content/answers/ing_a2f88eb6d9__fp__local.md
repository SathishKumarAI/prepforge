---
qid: ing_a2f88eb6d9__fp__local
question: 'Explain: Images are tokens, and resolution is money'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 588
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:16-05:00'
sources: []
---

**Why do we treat an image as a “token” and why does its resolution feel like money?**

At the heart of any AI that processes visual data is **information extraction**: we want to represent what matters (objects, layout, semantics) while discarding noise. In language models a token is a discrete symbol that carries a quantifiable amount of *Shannon entropy*—the information needed to predict the next word. The same idea applies to images: each pixel or group of pixels can be seen as a tiny symbol whose value changes the probability distribution over possible futures (e.g., what will the next patch look like?).

**Resolution is “money” because it multiplies the number of symbols we must handle.**  
- A 256 × 256 image has \(65{,}536\) pixels; a 512 × 512 image quadruples that to \(262{,}144\).  
- Every pixel adds a term to the loss function and to the gradient computation, inflating GPU memory, I/O bandwidth, and training time.  
- In compressed form (JPEG, WebP), higher resolution still demands more bits before entropy coding can eliminate redundancy; the cost scales roughly with the number of pixels until compression saturates.

From an **optimization perspective**, we trade *expressive power* for *computational budget*. A model that sees only a low‑res thumbnail may miss fine‑grained cues (e.g., text, small objects), but it can process more images per second or fit into tighter memory constraints. Thus resolution behaves like currency: spend more pixels to “buy” accuracy; save them to “save” resources.

**Non‑obvious insight:**  
The *marginal utility* of each additional pixel diminishes because adjacent pixels are highly correlated. After a certain point, increasing resolution yields little new information but incurs linear cost in tokens. Optimal image size is therefore not the largest possible but the one that balances the *entropy per token* against the *resource budget*, often around the scale where the model’s receptive field captures all relevant context.

In short, images are tokens because each pixel encodes a piece of probabilistic information; resolution is money because it multiplies the number of such pieces and thus the computational burden. The art lies in choosing the right “price” for the task at hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
