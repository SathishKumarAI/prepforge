---
qid: ing_09fc640335__faang__local
question: 'Explain: Defining Callbacks — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 545
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:07:38-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of *Defining Callbacks* in the context of “The Annotated ResNet‑50” article on Towards Data Science. I’ll assume we’re dealing with Keras/TensorFlow callbacks used during training (e.g., EarlyStopping, ModelCheckpoint) and that the reader wants to understand their purpose, implementation, and typical use‑cases.

**Approach**  
1. Define what a callback is in deep‑learning libraries.  
2. List common callbacks and when each is useful.  
3. Show how to define a custom callback for ResNet‑50 training.  
4. Highlight integration points with the annotated code (e.g., logging, learning‑rate schedules).  

**Depth**  
A **callback** is an object that Keras calls at specific stages of training: before/after each epoch or batch, on start/end of training, etc. It lets you hook into the training loop without altering model code.  
Typical callbacks include:  
- `EarlyStopping` (stop when validation loss plateaus)  
- `ModelCheckpoint` (save best weights)  
- `ReduceLROnPlateau` (dynamically adjust learning rate)  
- `TensorBoard` (visualize metrics).  

Custom callbacks inherit from `keras.callbacks.Callback`. Example for ResNet‑50:

```python
class LogGradients(Callback):
    def on_train_batch_end(self, batch, logs=None):
        grads = self.model.optimizer.get_gradients(
            self.model.total_loss, self.model.trainable_weights)
        # log or inspect grads here
```

Attach it in `model.fit(..., callbacks=[LogGradients()])`.  
Complexity is O(1) per call; memory overhead depends on what you store.

**Edge Cases**  
- Using callbacks that modify the model (e.g., freezing layers mid‑train) can break gradient flow if not carefully scheduled.  
- Over‑logging inside callbacks may slow training dramatically.  
- If callbacks depend on external state (file I/O), race conditions arise in distributed settings.

**Optimize & Communicate**  
To improve efficiency, batch multiple logging operations or use `tf.summary` instead of Python prints. In an interview, I’d narrate: “We keep the core training loop untouched; callbacks act as non‑intrusive extensions, allowing fine‑grained control over training dynamics.” This demonstrates structured thinking, depth in implementation details, and awareness of performance trade‑offs—key signals for FAANG evaluators.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
