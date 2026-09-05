---
qid: ing_0e1c25607b__eli5__local
question: 'Explain: Installation — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 259
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:52-05:00'
sources: []
---

Imagine the GitHub repository as a recipe book that lives in a cloud kitchen. To cook your own “Real‑Time Knowledge Graph” dish, you first need a chef’s knife—your computer with **Git** and **Python** installed.

1. Open a terminal (the kitchen counter).  
2. Type `git clone https://github.com/getzep/graphiti.git` – this pulls the recipe book from the cloud to your local pantry.  
3. Move into the folder: `cd graphiti`.  
4. Create a fresh cooking space with a virtual environment:  
   ```
   python -m venv env
   source env/bin/activate      # Windows: env\Scripts\activate
   ```  
5. Install the ingredients listed in `requirements.txt`:  
   `pip install -r requirements.txt` – this installs libraries like **networkx** and **pydantic** that help build and validate the graph.  

Now you can run the example script (`python examples/run.py`) and watch your knowledge graph grow in real time, just as a chef follows a recipe to create a delicious meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
