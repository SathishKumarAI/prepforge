---
qid: ing_86db314625__star__local
question: 'Explain: Kubernetes — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 366
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:08-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with launching a real‑time analytics dashboard for our e‑commerce platform. The data pipeline generated millions of click events per day, and we needed a search layer that could index and retrieve product recommendations within milliseconds.

**Task**  
I had to design a highly available Solr cluster on Kubernetes that could scale automatically with traffic spikes, provide zero‑downtime upgrades, and integrate seamlessly with our existing CI/CD workflow.

**Action**  
I first drafted the Helm chart: defined StatefulSets for Solr pods, used Headless Services for stable DNS, and added PersistentVolumeClaims with dynamic provisioning. I configured a custom `solrcloud.yaml` to enable SolrCloud mode and set up ZooKeeper via its own StatefulSet. For autoscaling, I leveraged the Kubernetes Cluster Autoscaler on GKE and set HPA rules based on CPU and heap usage. To guarantee zero downtime during upgrades, I implemented rolling updates with a readiness probe that queried Solr’s `/admin/ping`. Finally, I automated deployments through GitHub Actions, running `helm upgrade --install` after every merge to the `main` branch.

**Result**  
The Solr cluster handled peak traffic of 3 million queries per minute without any latency spikes. We reduced average query time from 120 ms to 35 ms and achieved 99.9% uptime during a month‑long promotion event. I learned that coupling Helm best practices with Kubernetes autoscaling can turn a complex search stack into a resilient, self‑healing service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
