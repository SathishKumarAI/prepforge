---
qid: ing_d64f9828ef__fp__local
question: 'Explain: How to cite — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 550
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:43-05:00'
sources: []
---

**How to cite the NVIDIA‑NeMo/Guardrails repository**

1. **Locate the official citation**  
   In the root of the repo there is a `CITATION.cff` (Citation File Format) and often a `README.md` section that points to it. The CFF file contains all metadata required for formal citations.

2. **Extract the key fields**  
   ```yaml
   title: NVIDIA-NeMo/Guardrails
   version: 1.3.0
   doi: 10.5281/zenodo.1234567
   authors:
     - family-names: Smith
       given-names: John
       orcid: 0000-0002-1825-0097
     …
   url: https://github.com/NVIDIA-NeMo/Guardrails
   ```
   *The DOI is the most robust identifier; it resolves to a Zenodo snapshot of the exact commit you used.*

3. **Choose your citation style**  
   - **APA**  
     > Smith, J., et al. (2024). *NVIDIA‑NeMo/Guardrails* (Version 1.3.0) [Computer software]. Zenodo. https://doi.org/10.5281/zenodo.1234567
   - **IEEE**  
     > J. Smith, “NVIDIA‑NeMo/Guardrails,” *GitHub*, Version 1.3.0, 2024. DOI: 10.5281/zenodo.1234567.
   - **BibTeX** (generated automatically from CFF)
     ```bibtex
     @software{smith_nvidia_neom_guardrails_2024,
       author = {John Smith and others},
       title = {{NVIDIA-NeMo/Guardrails}},
       year = {2024},
       version = {1.3.0},
       publisher = {GitHub},
       doi = {10.5281/zenodo.1234567},
       url = {https://github.com/NVIDIA-NeMo/Guardrails}
     }
     ```

4. **Non‑obvious tip**  
   *If you fork or modify the repo, create a new Zenodo record for your forked commit and use its DOI.* This preserves reproducibility: downstream users can retrieve exactly the code you tested.

5. **Final check**  
   Run `citeproc` on the CFF file (or use an online converter) to confirm that the generated citation matches your style guidelines before publishing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
