---
qid: ing_312fcfa6e1__star__local
question: 'Explain: 14.1.1.1. Flipping and Cropping ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 373
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:46-05:00'
sources: []
---

**Situation**  
While working on a medical imaging project at my last company, our convolutional network was overfitting to the limited number of labeled CT scans we had. The validation accuracy plateaued around 78 % and the training loss kept decreasing, indicating memorization rather than generalization.

**Task**  
I needed to augment the dataset so that the model would learn robust features across different orientations and scales without inflating the training set size or introducing unrealistic artifacts.

**Action**  
I implemented a custom `tf.data.Dataset` pipeline that applied *flipping* (horizontal and vertical) and *cropping* (random 224×224 patches from the original 512×512 images). For flipping, I used TensorFlow’s `tf.image.flip_left_right` and `flip_up_down`, ensuring each image had a 50 % chance of being flipped to preserve class balance. Cropping was done with `tf.image.random_crop`, coupled with a center‑crop fallback for border cases. I also added a conditional check so that the cropped region always contained at least 70 % of the target organ, preventing loss of critical diagnostic information. The pipeline was parallelized with `num_parallel_calls=tf.data.AUTOTUNE` and cached to speed up training.

**Result**  
After integrating this augmentation strategy, validation accuracy rose to 84 %, while overfitting decreased (training‑validation gap shrank from 12 % to 4 %). Training time increased by only ~15 % due to efficient data prefetching. I learned that simple geometric augmentations, when applied thoughtfully with domain constraints, can dramatically improve model generalization without extra labeled data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
