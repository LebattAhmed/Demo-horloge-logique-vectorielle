// Structure représentant un événement
class Event {
    constructor(timestamp, process, description) {
      this.timestamp = timestamp;
      this.process = process;
      this.description = description;
    }
  }
  
  // Fonction pour comparer les événements
  function compareEvents(eventA, eventB) {
    if (eventA.timestamp < eventB.timestamp) {
      return -1;
    } else if (eventA.timestamp > eventB.timestamp) {
      return 1;
    } else {
      if (eventA.process < eventB.process) {
        return -1;
      } else if (eventA.process > eventB.process) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  // Fonction d'envoi de message
  function sendMessage(sender, receiver, message) {
    // Augmenter le timestamp local du sender
    sender.timestamp += 1;
  
    // Créer un nouvel événement
    const event = new Event(sender.timestamp, sender.id, message);
  
    // Envoyer l'événement au receiver
    receiver.receiveMessage(event);
  }
  
  // Fonction de réception de message
  function receiveMessage(event, receiver) {
    // Mettre à jour le timestamp local du receiver
    receiver.timestamp = Math.max(receiver.timestamp, event.timestamp) + 1;
  
    // Afficher l'événement reçu
    console.log(`Process ${receiver.id} received message: ${event.description} (Timestamp: ${receiver.timestamp})`);
  }
  
  // Fonction pour simuler les échanges entre les processus
  function simulateCommunication() {
    const process1 = {
      id: 1,
      timestamp: 0,
      send: function (receiver, message) {
        sendMessage(this, receiver, message);
      },
      receiveMessage: function (event) {
        receiveMessage(event, this);
      }
    };
  
    const process2 = {
      id: 2,
      timestamp: 0,
      send: function (receiver, message) {
        sendMessage(this, receiver, message);
      },
      receiveMessage: function (event) {
        receiveMessage(event, this);
      }
    };
  
    // Processus 1 envoie un message à Processus 2
    process1.send(process2, 'Hello from Process 1');
  
    // Processus 2 envoie un message à Processus 1
    process2.send(process1, 'Hello from Process 2');
  }
  
  // Exécution de la simulation
  simulateCommunication();  