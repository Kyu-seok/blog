---
title: Deadlock
author: Kyu Seok Yeum   
date: July 8, 2021
---
## Intro
Deadlock is a state when all process enter asleep state due to waiting of requested resources held by one another.

![image of deadlock]()

example of resources are : CPU, RAM, virtual memory, hard disk and etc.

we can differenctiate the resources by
* Preemptive resources **vs** Non-Preemptive resources
* Mutually exclusive resources **vs** Global resources
* Serially reusable resources **vs** Non-reusable resources

Example of deadlock)
let there is 2 process (P1, P2), 2 resources (R1, R2)

| Process 1  | time | Process 2  |
| ---------- | ---- | ---------- |
| ...        | t1   | ...        |
| request R2 | t2   | ...        |
| ...        | t3   | request R1 |
| request R1 | t4   | ...        |
| ...        | t5   | request R2 |
| ...        | t6   | ...        |
| release R1 | t7   | ...        |
| ...        | t8   | release R1 |
| release R2 | t9   | ...        |
| ...        | t10  | release R2 |
| ...        | t11  | ...        |

from above table, we can see that deadlock occurse in the system at *t5*, as both process P1 and P2 is wating for R1 and R2 respectively.

&nbsp;

## Graph model

There are 2 deadlock model used in representing deadlock which are 
1. Graph model
2. State transition model

###### Graph model
![graph model p-1]()


###### State transition model

| state | R units allocated | request |
| ----- | ----------------- | ------- |
| 0     | 0                 | x       |
| 1     | 0                 | o       |
| 2     | 1                 | x       |
| 3     | 1                 | o       |
| 4     | 2                 | x       |

![state transition model p-2]()

*S33* is a deadlock as if system enters S33, there is no other state that it points to, which means that the system is stuck.

&nbsp;

___

##### Conditions for deadlock to occur

> * Exclusive use of resource
> * Non-preemptive resources
> * Hold and Wait
> * circular wait
  
&nbsp;
## Deadlock Prevention

Deadlock prevention can be done by removing *one* condition that casue deadlock.

1. Removal of Exclusive use of resource ( make all resources global )
     
     - This method is physically impossible as program cannot be built with global resources completely.

2. Removal of Non-Preemptive resources ( make all resources preemptive )
   
   - Physically impossible
   - This method can be achieved similarly by process returning all holding resources when requested resource cannot be recieved. However time and resource is wasted and it is not practical.

3. Force no hold and wait ( total allocation )
   
   - Waste of resources as process may hold all resources that will be used at the end. 
   - This will cause other process to wait which is not efficient.

4. Force no circular wait
    
    - This method of prevention is achieved by forcing process to request resources in partial order. 
    - For example, if P1 needs (R1, R2, R3) and P2 needs (R1, R3), as P1 comes first, P1 will be allocated all resources needed in partial order, P1 = R1 -> R2 -> R4. Now, when P2 request for resources, request has to be in partial order so it is R1-> R3. However as R1 is aleady allocated ot P1, P2 will not recieve R1 nor R3.
    - Waste of resource as R3 is not being used in the system, but P2 is not allowed to use R3.

> summary:
> prevention can be done by removing a factor causing deadlock. However resources are wasted, and it is impractical on use.

&nbsp;

## Deadlock Avoidance

Deadlock avoidance is done by observing whether there are possibilities of deadlock throughout the entire process. If a process requests resources that might casue a deadlock, deadlock avoidance algorithm postpone the allocation of resources. The system is always maintained in the safe state.

*Safe state*: State that all process are possible to end normally.There is existance of safe sequence which guarantee deadlock does not occur on provided sequence.
*Unsafe state*: state when there is possibility for deadlock to occur. ( does not mean that deadlock is alaways occuring )

Assumption to use Deadlock Avoidance:
- There is set number of process
- There is set number of resources
- Have information on resources that will be requested from process
- resources always returned after the use

( Avoidance is not practical due the the assumptions to be made )

Algorithms used in Deadlock Avoidance:
1. Dijkstra's banker's algorithm
2. Habermann's algorithm.
   
&nbsp;

###### Dijkstra's banker's algorithm

let there is resource type R, with 10 resource units, 3 processes

*Case 1*
| process ID | max claim | cur Alloc | Addtional need |
| ---------- | --------- | --------- | -------------- |
| p1         | 3         | 1         | 2              |
| p2         | 9         | 5         | 4              |
| p3         | 5         | 2         | 3              |

There are 10 R units initially, and 8 has been allocated to processes. Now, system has 2 R units left. By following the assumptions, if 2 remaining R is alloacted to P1, it is going to return 3 R after execution. 3 R that is in system, can now be allocated to P3 which returns 5 R after execution. Finally, 4 R can be allocated to P2 to finihsh the program.

*Case 2*
| process ID | max claim | cur Alloc | Addtional need |
| ---------- | --------- | --------- | -------------- |
| p1         | 5         | 1         | 4              |
| p2         | 9         | 5         | 4              |
| p3         | 7         | 2         | 5              |

There are 10 R units initially, and 8 has been allocated to processes. Now, system has 2 R units left. However, all processes need resources more than 2, therefore, there is no safe sequence.

&nbsp;

###### Habermann's algorithm

let there is 3 types of resources: Ra, Rb, Rc
number of resource units for each type: 10, 5, 7

![Habermann's table P-3]()

Initial resource = 10, 5, 7
Available resource unit = 3, 3, 2
Safe sequence : P2 -> P4 -> P1 -> P3 -> P5

>summary:
>avoidance has high overhead as system has to watch program at all times. It still has a low resource utilization problem as there are unused resources to maintain safe sequence. Finally, it is not practical, as there are several assumptions to be made.

&nbsp;

## Deadlock Detection

Deadlock detection allows deadlock in the program. And when deadlock occurs in program, system detects the deadlock and subsequently correct it. Resource Allocation Graph is used to detect deadlock, which is directed, bipartite graph.

G = ( N , E )
N = { Np, Nr } ,
where Np = set of process { P1, P2, P3, ..., Pn} , Nr = set of resources { R1, R2, R3, ..., Rn}

![RAG P-4]()

P -> R : request
P <- R : allocation

By eliminating edge in RAG, we can determine if system is in a deadlock or not. If all edges are completely reduced in RAG, it means that there is no deadlock.

![RAG example in phoe P-5]()
![RAG example in phoe P-6]()

>summary:
>deadlock detection has overhead as detecting algorithm is running on the program execution.

&nbsp;

## Deadlock Recovery

There are 2 methods used in recovery
1. Process termination
   - This method terminate process that is in deadlock state, it ensures that deadlock is resolved with certainty and speed. But expense is high as partial computations will be lost. This approach has high overhead because after each abort, an algorithm must determine whether the system is still in deadlock. Several factors must be considered such as priority and age of the process.

2. Resource preemption
   - Resources allocated to various processes may be successively preempted and allocated to other processes until the deadlock is broken.

&nbsp;

Checkpoint restart is done after process has aborted. This is doneby process being context saved in specific checkpoints. This is also called as rollback.