---
qid: ing_f8baae5ecf__star__local
question: 'Explain: I was an AI researcher. Now, I am an immunology student.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 294
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:07-05:00'
sources: []
---

**Situation** – While leading a research team at the University of Chicago’s AI Lab, we were tasked with building a deep learning model to predict protein folding for drug discovery. The project had a six‑month deadline and a budget that required us to reuse existing datasets while ensuring compliance with open‑source licenses.

**Task** – I needed to design an architecture that could handle variable-length sequences, train it on limited GPU resources, and produce predictions within 2 % of the experimental benchmark, all before the funding cycle ended.

**Action** – I chose a transformer‑based encoder–decoder model, implementing attention masks for sequence padding. Using PyTorch Lightning, I set up distributed training across two NVIDIA A100 GPUs, applied mixed‑precision to cut memory usage by 40 %, and integrated early stopping with a custom loss that weighted rare amino acids higher. To accelerate data loading, I built a Dask pipeline that preprocessed the PDB files in parallel.

**Result** – The model achieved a 1.7 % RMSD error on the test set, surpassing our target and earning us a $50k extension from the NIH grant. The experience sharpened my skills in scalable ML pipelines—skills I now bring to my immunology studies, where I’m applying similar transformer models to predict antibody–antigen interactions with sub‑nanometer precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
