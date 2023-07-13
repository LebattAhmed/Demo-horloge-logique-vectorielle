// Fonction pour comparer les horloges vectorielles
function compareClocks(clockA, clockB) {
  let equal = true;
  let greater = false;

  for (let i = 0; i < clockA.length; i++) {
    if (clockA[i] < clockB[i]) {
      equal = false;
    }
    if (clockA[i] > clockB[i]) {
      greater = true;
      break;
    }
  }

  if (equal) {
    return 0;
  }
  if (greater) {
    return 1;
  }
  return -1;
}

// Fonction d'envoi de message
const sendMessage = (sender, receiver, message) => {
  // Augmenter l'horloge vectorielle du sender
  sender.clock[sender.id] += 1;

  // Copier l'horloge vectorielle du sender dans le message
  const messageClock = [...sender.clock];

  // Envoyer le message au receiver
  receiver.receiveMessage(messageClock, message);
};

// Fonction de réception de message
const receiveMessage = (clock, message, receiver) => {
  // Mettre à jour l'horloge vectorielle du receiver
  for (let i = 0; i < clock.length; i++) {
    clock[i] = Math.max(clock[i], message[i]);
  }
  clock[receiver.id] += 1;

  // Afficher le message reçu
  console.log(`Process ${receiver.id} received message: ${message} (Clock: ${clock})`);
};

// Fonction pour simuler les échanges entre les processus
function simulateCommunication() {
  const process1 = {
    id: 0,
    clock: [0, 0],
    send: (receiver, message) => {
      sendMessage(process1, receiver, message);
    },
    receiveMessage: (clock, message) => {
      receiveMessage(clock, message, process1);
    }
  };

  const process2 = {
    id: 1,
    clock: [0, 0],
    send: (receiver, message) => {
      sendMessage(process2, receiver, message);
    },
    receiveMessage: (clock, message) => {
      receiveMessage(clock, message, process2);
    }
  };

  // Processus 1 envoie un message à Processus 2
  process1.send(process2, 'Hello from Process 1');

  // Processus 2 envoie un message à Processus 1
  process2.send(process1, 'Hi from Process 2');
}

// Exécution de la simulation
simulateCommunication();