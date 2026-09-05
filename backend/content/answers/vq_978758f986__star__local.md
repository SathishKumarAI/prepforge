---
qid: vq_978758f986__star__local
question: What’s your favorite subject, and why?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 314
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:45-05:00'
sources: []
---

**Situation:**  
During my sophomore year at university I enrolled in a required introductory computer science course that covered algorithms, data structures, and complexity theory. The class was mostly lecture‑heavy, and many students—including myself—found the material abstract and disconnected from real‑world problems.

**Task:**  
I wanted to prove to myself and my classmates that these concepts had practical value, so I set out to build a small project that would let me apply algorithmic thinking directly to something tangible: an efficient route‑planning tool for a local food delivery startup.

**Action:**  
First, I mapped the city’s street network into a weighted graph using OpenStreetMap data. Then I implemented Dijkstra’s algorithm in Python with NetworkX, tweaking it to handle dynamic traffic weights by integrating real‑time API feeds from Google Maps. I also added a caching layer with Redis to keep latency under 200 ms for frequent queries. Throughout the process, I documented my design choices and performance trade‑offs in a Jupyter notebook shared on GitHub.

**Result:**  
The prototype reduced average delivery times by 18% compared to the company’s manual route planner, cutting fuel costs by roughly $2,300 per month. The project earned me an “Outstanding Application” award from the university’s CS department and sparked a new passion for applied algorithmic research—my favorite subject in both class and practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
