---
qid: ing_f0b368adb2__fp__local
question: 'You need one embedding space for your own domain: product photos, spec
  sheets as PDFs, and text queries. Off-the-shelf CLIP is not good enough. How do
  you build it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 492
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:30:48-05:00'
sources: []
---

**Why a single space is essential**

A product‑search engine must answer “Which item matches this photo?” and “Which spec sheet describes that query?” In the same geometry the distance between an image, its PDF layout, and a textual description should reflect *semantic relevance*, not raw modality artefacts.  
Contrastive learning formalises this: we minimize the KL divergence between joint embeddings of true pairs while pushing apart mismatched ones. This is an instance of **metric‑learning + information bottleneck**—the network compresses each modality into a low‑dimensional representation that preserves only the mutual information needed for cross‑modal matching.

**Construction pipeline**

1. **Data assembly** – collect triples *(image, PDF snippet, text query)* that refer to the same product.  
2. **Modality encoders** – CNN + ViT for images, a lightweight Transformer for PDFs (tokenise layout + OCR), and a language model for queries.  
3. **Shared latent head** – project each encoder output to a 512‑dimensional vector; add a small *cross‑modal attention* layer that learns modality‑agnostic weights.  
4. **Loss** – use InfoNCE on all pairwise combinations (image–text, image–PDF, text–PDF) plus a *triplet* regulariser to keep intra‑product distances tight.  
5. **Fine‑tune with retrieval objective** – run a few epochs of batch‑hard negative mining so the space becomes discriminative for ranking.

**Non‑obvious insight**

Because PDFs are sparse and noisy, training them in isolation causes “PDF‑overfitting.” Instead, **anchor the PDF encoder to the image encoder early**: freeze the image network for several iterations, then jointly fine‑tune. This leverages the richer visual signal as a scaffold, ensuring the shared space captures product semantics rather than PDF idiosyncrasies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
