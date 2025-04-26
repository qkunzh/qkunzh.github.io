## 大模型推理优化工程师技能路线图

**听力材料**

[function programming](https://www.youtube.com/watch?v=MUcka_SvhLw&list=PLre5AT9JnKShBOPeuiD9b-I4XROIJhkIU)

[basic路线学习导引]( https://logikosto.feishu.cn/wiki/ECArwdRwEi1LVgknksZcoV9inxc)

### 0**数学基础部分**

**目标**：为理解和优化大规模模型提供必要的理论支持。

**核心内容**：

​	•	**线性代数**：掌握矩阵运算、特征值分解等基础知识，这对于理解神经网络的工作原理至关重要。

​	•	**概率与统计**：理解概率分布、统计推断等概念，有助于分析模型的性能和稳定性。

​	•	**数值优化**：熟悉梯度下降等优化算法，理解其在大规模模型训练和推理中的应用。

**学习课程**

| 课程名称 | 课程链接                                         |
| -------- | ------------------------------------------------ |
| nlp      | https://web.stanford.edu/class/cs224n/index.html |
| nndl     | https://nndl.github.io/                          |
| mml      | https://mml-book.github.io/                      |

------

书籍：鸢尾花书籍：矩阵部分&概率论部分  https://textbooks.math.gatech.edu/ila/

### 1**语言基础部分**

**目标**：具备高效开发和优化大模型所需的编程技能。

**核心内容**：

​	•	**Python**：作为主流的人工智能开发语言，掌握其语法、数据结构和常用库（如NumPy、Pandas）是基础。

​	•	**C++**：由于其高性能特性，许多深度学习框架和推理引擎都使用C++，掌握C++有助于进行底层优化。

​	•	**CUDA**：对于GPU加速计算，理解CUDA编程模型，有助于充分利用NVIDIA GPU的计算能力。

**学习课程**

| 课程名称         | 课程链接                                                     | 状态   |
| ---------------- | ------------------------------------------------------------ | ------ |
| c++基础          | https://web.stanford.edu/class/archive/cs/cs106l/cs106l.1254/ | 学习中 |
| c++项目剖析      | https://15445.courses.cs.cmu.edu/fall2024/                   | 学习中 |
| python基础 cs61a | https://cs61a.org                                            |        |
| cuda编程         |                                                              |        |

资料: 

- https://federico-busato.github.io/Modern-CPP-Programming/
- 研究python语言的各个特性
- https://web.stanford.edu/class/archive/cs/cs106l/cs106l.1192/index.html
- https://web.stanford.edu/class/archive/cs/cs106l/cs106l.1212/assignments.html

------



### **2框架基础部分**

**目标**：熟悉主流的深度学习框架和推理引擎，能够进行模型的训练、优化和部署。

**核心内容**：

​	•	**深度学习框架**：熟悉TensorFlow、PyTorch等主流框架的使用，能够搭建和训练复杂的神经网络模型。

​	•	**推理引擎**：了解TensorRT、ONNX Runtime、OpenVINO等推理引擎的原理和使用方法，能够将训练好的模型进行优化和部署。

​	•	**模型转换与优化**：掌握模型从训练到推理的转换过程，包括量化、剪枝等优化技术，以提高推理性能。

**学习课程**

| 课程名称         | 课程链接                                       | 状态   |
| ---------------- | ---------------------------------------------- | ------ |
| dl system        | https://dlsyscourse.org/lectures/              | 学习中 |
| tiny ml & dl llm | https://hanlab.mit.edu/courses/2024-fall-65940 |        |

------

### 3系统基础部分

| 课程名称      | 教材     | 课程链接                                                     | 视频链接                                                     |
| ------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 6.s081        | xv6-book | [课程主页](https://csdiy.wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/MIT6.S081/) | https://www.youtube.com/watch?v=L6YqHxYHa7A                  |
| mini-riscv-os | 无       | https://gitee.com/unicornx/riscv-operating-system-mooc/issues | https://www.bilibili.com/video/BV1Q5411w7z5/?vd_source=08270e62e2ccf7e3118d510f04e7e0dc |
| nju-os        |          | https://jyywiki.cn/OS/2024/                                  | https://space.bilibili.com/202224425/lists/2237004?type=season |
| pa            |          | https://nju-projectn.github.io/ics-pa-gitbook/ics2024/       |                                                              |

#### 课程资料

[three pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)

[xv6-book](https://pdos.csail.mit.edu/6.828/2021/xv6/book-riscv-rev2.pdf)

[jyy-os-refrence](https://jyywiki.cn/OS/References.md)

---



### 4**硬件基础部分**

**目标**：理解硬件架构，能够针对不同硬件进行模型优化。

**核心内容**：

​	•	**GPU架构**：了解NVIDIA等厂商的GPU架构特点，掌握GPU编程模型，能够进行GPU加速的模型优化。

​	•	**专用加速器**：了解TPU、NPU等专用硬件的工作原理和编程接口，能够针对这些硬件进行模型优化。

​	•	**分布式计算**：理解分布式计算框架，如MPI、Horovod等，能够在多机多卡环境下进行模型训练和推理。

------



### 5**分布式训练部分**

**核心内容**

- **框架部分** deepspeed,megotron
- **理论基础** 

### 6**领域知识部分**

**目标**：深入理解大模型推理优化的前沿技术和研究动态。

**核心内容**：

​	•	**大模型架构**：研究Transformer等大规模模型的架构设计，理解其优势和挑战。

​	•	**模型压缩技术**：了解大模型轻量化的技术，如知识蒸馏、参数共享等，以减少模型的计算和存储开销。

​	•	**前沿研究**：关注学术界和工业界在大模型推理优化方面的最新研究成果，了解当前的技术趋势和挑战。

**学习课程**

| 课程名称 | 课程链接                                     | 视频链接                                                     | 状态 |
| -------- | -------------------------------------------- | ------------------------------------------------------------ | ---- |
| 并行计算 | https://gfxcourses.stanford.edu/cs149/fall21 | [视频链接](https://csdiy.wiki/%E5%B9%B6%E8%A1%8C%E4%B8%8E%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/CS149/#_1) |      |
|          |                                              |                                                              |      |

---



### **实战项目部分**

**目标**：通过实践项目，巩固所学知识，提升解决实际问题的能力。

**项目建议**：

​	1.	**大模型推理引擎开发**：设计并实现一个支持大规模模型推理的引擎，优化其计算性能和资源利用率。

​	2.	**模型压缩与加速**：针对大型预训练模型，应用剪枝、量化等技术，优化其推理速度和存储需求。

​	3.	**多设备部署**：将大模型部署在多GPU或多节点环境中，优化其分布式推理性能。

	4.	**边缘计算优化**：针对边缘设备的资源限制，优化大模型的推理性能，实现高效的边缘推理。

https://github.com/zhaochenyang20/Awesome-ML-SYS-Tutorial?tab=readme-ov-filem



# [资料传送门](https://csdiy.wiki/)

# 计算机基础

| 课程方向         | 课程名                         | 课程链接                                                    | 教学视频 |
| ---------------- | ------------------------------ | ----------------------------------------------------------- | -------- |
| 数学             | [cs70](http://www.eecs70.org/) | http://www.eecs70.org/                                      |          |
| 算法             | 算法1&2                        | https://www.coursera.org/learn/algorithms-part1             |          |
| 软件工程         | 6.031                          | https://web.mit.edu/6.031/www/sp22/                         |          |
| 计算机网络       | network                        | https://gaia.cs.umass.edu/kurose_ross/index.php             |          |
| 分布式基础       | 6.5480                         | http://nil.csail.mit.edu/6.5840/2024/schedule.html          |          |
| 全栈             | full stack                     | https://fullstackopen.com/zh/                               |          |
| 算法             | algs-tools                     | https://web.stanford.edu/class/cs168/                       |          |
| 计算机基础       | csapp                          | https://csapp.cs.cmu.edu/                                   |          |
| build-a-computer |                                | https://www.coursera.org/learn/build-a-computer/home/week/1 |          |
| talent-plant     |                                | https://github.com/talent-plan/tinykv                       |          |

## 课程资料

算法题集：https://github.com/acm-clan/algorithm-stone?tab=readme-ov-file

# 编译原理

| 课程名称     | 教材 | 课程链接                                  | 视频链接                                                     |
| ------------ | ---- | ----------------------------------------- | ------------------------------------------------------------ |
| 编译原理     |      | https://pku-minic.github.io/online-doc/#/ |                                                              |
| 编译原理进阶 |      | https://github.com/kaist-cp/cs420         |                                                              |
| 编译原理ref  |      | http://docs.compilers.cpl.icu/#/          | [视频链接](https://space.bilibili.com/479141149/lists?sid=2312309) |

