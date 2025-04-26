# 大模型并行技术综述

## 硬件基础概述

## 数学原理概述

## 数据并行

朴素的数据并行思想：将模型在每张卡上dup一份，然后并行的计算forward阶段。计算完成后，将所有farward的结果传递到其中一张显卡上，由其中一张卡进行backward且更新参数，然后再并行的广播到所有的卡。 

带来的问题：

1. 显卡占用量成倍的增加。
2. 主卡显存占用会明显高于其他卡。主卡很容易出现OOM问题。进一步制约模型参数量的扩大。
3. 负责reduce梯度的显卡，明显会出现通信瓶颈问题。

分布式数据并行思想：多卡通讯采用Ring-Reduce的方式进行分卡数据的聚合。将数据聚合分成两个阶段, All-Scatter，All-Gather。 

然后将优化器状态、梯度、模型参数进行分割。每块卡只存一部分数据，在使用的时候，再进行数据的聚合。 这种技术叫做零冗余优化。 

## 流水线并行

基本思想：将模型进行横向切分，分散到不同的卡上。 但是这样的切分会造成两个问题：

1. GPU利用度不够，有比较多的空闲bubble。
2. 中间结果占据了大量的存储空间（问题2其实是共性的） 

解决方法： 

1. 采用流水线四线，提高并行度，从而提高利用率。
2. 在forward的时候，仅保存模型前一层的的中间结果。在backward的时候，仅保存模型模型后一层的中间结果。（类似滚动数组的思想)，避免大量中间结果的保存带来的GPU浪费。

## 张量并行



## 框架原理分析

deepspeed: 微软 https://www.microsoft.com/en-us/research/project/deepspeed/   

megtron：英伟达 https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/index.html#quick-start

## 基础框架分析

tinygrad https://github.com/tinygrad/tinygrad

picotron https://github.com/huggingface/picotron

## 参考资料

[矩阵求导基础](https://zhuanlan.zhihu.com/p/262751195)

https://zhuanlan.zhihu.com/p/598714869 

https://zhuanlan.zhihu.com/p/613196255 leader给的资料

[视频资料](https://www.bilibili.com/video/BV1fyFheVETH/?spm_id_from=333.1387.favlist.content.click&vd_source=08270e62e2ccf7e3118d510f04e7e0dc)

https://zhuanlan.zhihu.com/p/19480848641

https://huggingface.co/spaces/nanotron/ultrascale-playbook?section=high_level_overview

https://huggingface.co/docs/transformers/v4.13.0/en/parallelism



