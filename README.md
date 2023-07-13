
# Demo horloge logique et vectorielle

ce sont des exemples de démonstration sur l'algorithme de l'amport.



## l'execution : 

pour le fichier Lamport.js

```bash
  node Lamport.js
```
pour le fichier vectorielle.js

```bash
  node vectorielle.js
```

## Resultat :

l'horloge logique
```bash
  Process 2 received message: Hello from Process 1 (Timestamp: 2)
Process 1 received message: Hello from Process 2 (Timestamp: 4)
```

l'horloge vectorielle
```bash
Process 1 received message: Hello from Process 1 (Clock: 1,0)
Process 0 received message: Hi from Process 2 (Clock: 1,1)
```
