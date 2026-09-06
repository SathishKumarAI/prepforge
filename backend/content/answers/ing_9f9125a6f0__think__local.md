---
qid: ing_9f9125a6f0__think__local
question: 'Explain: Quick Start — GitHub - zai-org/GLM-4.5: GLM-4.5: Agentic, Reasoning,
  and Coding (ARC) Foundation Models \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 517
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:38:19-05:00'
sources: []
---

**Quick‑Start Guide for the GLM‑4.5 (ARC) Foundation Models**

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/zai-org/GLM-4.5.git
   cd GLM-4.5
   ```

2. **Set Up a Virtual Environment**  
   ```bash
   python -m venv .venv
   source .venv/bin/activate   # on Windows: .venv\Scripts\activate
   ```

3. **Install Dependencies**  
   The core packages are listed in `requirements.txt`.  
   ```bash
   pip install -r requirements.txt
   ```
   If you want GPU support, ensure CUDA‑compatible PyTorch is installed:
   ```bash
   pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu118
   ```

4. **Download the Pre‑Trained Model**  
   The model weights are hosted on Hugging Face. Use the provided script or manually download:  
   ```bash
   python scripts/download_model.py  # this pulls the GLM‑4.5 weights
   ```
   After downloading, they’ll be stored in `models/GLM-4.5`.

5. **Run a Simple Inference Demo**  
   ```bash
   python examples/simple_infer.py --prompt "Explain quantum entanglement."
   ```
   The script loads the model from the local directory and prints the generated response.

6. **Optional: Fine‑Tuning or Prompt Engineering**  
   * Fine‑tune with your own dataset using `scripts/fine_tune.py`.  
   * Explore prompt templates in `configs/prompt_templates.yaml`.

7. **Troubleshooting**  
   * If you encounter GPU memory errors, reduce the batch size (`--batch_size`) or use mixed precision (`--fp16`).  
   * Verify that your CUDA drivers match the PyTorch build.

8. **Contribute / Report Issues**  
   Fork the repo, make changes, and open a pull request. For bugs, file an issue with reproducible steps.

That’s it! You now have GLM‑4.5 running locally, ready for agentic tasks, reasoning experiments, or coding assistance. Happy modeling!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
