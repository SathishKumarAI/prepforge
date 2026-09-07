---
qid: ing_89a142f4cc__faang__local
question: 'Explain: Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 501
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:34-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Model Taxonomy*—the systematic way we classify AI models (e.g., supervised vs unsupervised, generative vs discriminative, transformer‑based vs CNN‑based). I’ll assume the interview wants a concise taxonomy that covers both high‑level categories and concrete examples.

**Approach**  
1. Outline the top‑level axes: *Task*, *Learning Paradigm*, *Architectural Family*.  
2. For each axis list representative models.  
3. Show intersections (e.g., supervised + transformer = BERT).  

**Depth**  
| Axis | Sub‑category | Representative Models | Key Traits |
|------|--------------|-----------------------|------------|
| **Task** | Supervised | CNN, ResNet, BERT | Predict labels from input |
| | Unsupervised | Autoencoder, VAE, GAN | Learn latent structure |
| | Reinforcement | DQN, PPO, AlphaZero | Optimize policy via rewards |
| | Generative | GPT‑3, Stable Diffusion | Produce novel data |
| **Learning Paradigm** | Discriminative | SVM, Logistic Regression | Direct mapping to output |
| | Generative | GAN, VAE | Model joint distribution |
| **Architecture** | CNN | AlexNet, EfficientNet | Convolutional filters |
| | RNN/LSTM | LSTM, Transformer‑XL | Sequential context |
| | Transformer | BERT, GPT, T5 | Self‑attention, parallelism |

This matrix lets you pick a model by specifying the task, learning type, and desired architecture. It also highlights trade‑offs: CNNs excel at spatial data; transformers shine on long‑range dependencies but are compute‑heavy.

**Edge Cases**  
- *Hybrid models* (e.g., Vision‑Transformer) blur axes—must be handled as multi‑dimensional entries.  
- Emerging paradigms (diffusion, sparse transformers) may not fit neatly; document them as “experimental” sub‑categories.  

**Optimize & Communicate**  
Explain that the taxonomy is a living diagram: new models often merge categories. Emphasize its utility for quick model selection and risk assessment in production pipelines. Conclude by noting how this structure aids both research (theory) and engineering (deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
