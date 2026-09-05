---
qid: ing_0a99ceeaa7__fp__local
question: 'Explain: Running a GPU serving image — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 559
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:28:02-05:00'
sources: []
---

**Why a GPU‑backed serving image matters**

When a model is trained on the same device that serves it, the *inference* pipeline inherits the computational graph’s parallelism and memory layout. In TensorFlow, every `tf.Tensor` operation is compiled into an XLA kernel that can be dispatched to either CPU or GPU. If the serving container runs on a CPU‑only image, every GPU‑accelerated tensor must fall back to host memory, incurring costly PCIe transfers and kernel launches—an \(O(n)\) overhead per request that breaks latency guarantees.

**Deriving the solution**

1. **Base Image** – `tensorflow/serving:latest-gpu` exposes the same gRPC/REST API but bundles a CUDA‑enabled runtime and cuDNN libraries.  
2. **Dockerfile** – simply `FROM tensorflow/serving:latest-gpu`, then copy the SavedModel (`/models/my_model`). The Docker layer cache keeps the heavy CUDA binaries out of rebuilds.  
3. **Runtime Flags** – start the server with `--model_config_file=/etc/tf_serving/models.config` and set `TF_CPP_MIN_LOG_LEVEL=2`. The server auto‑detects `/dev/nvidia*` devices; no extra GPU‑device flag is needed because TensorFlow’s C++ API automatically maps tensors to the best device.  
4. **Deploy in TFX** – wrap the container as a `tfx.components.PythonComponent` or use `tfx.extensions.serving`’s `ModelResolver`, ensuring that the serving spec references the same image.

**Deeper principle**

This is an instance of *device‑agnostic computation graphs*: TensorFlow’s abstraction lets you write code once and let the runtime choose CPU vs GPU based on device availability. The cost of a tensor move is hidden behind the graph, so the only thing that matters for latency is ensuring the graph itself is compiled with GPU kernels.

**Non‑obvious insight**

Most people overlook the *device placement graph* when deploying. Even if you ship a GPU image, TensorFlow will still place ops on CPU unless the model contains at least one GPU‑capable op (e.g., `Conv2D`). For pure inference of dense layers, you must explicitly set `tf.config.set_visible_devices` or insert a dummy GPU‑bound op during export to force placement. Otherwise, the server will happily run on CPU, defeating the purpose of the GPU image.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
