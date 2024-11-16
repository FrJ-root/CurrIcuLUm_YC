Contexte du projet

Vous travaillez en tant que développeur web junior pour la société DataCollect Inc., une entreprise spécialisée dans l’analyse de données RH pour de grandes entreprises. Votre mission est de créer un formulaire d’évaluation à plusieurs étapes, destiné aux employés de l’entreprise, afin de collecter des informations essentielles pour une étude interne. Ce formulaire permettra de mieux comprendre la répartition démographique des employés, leur satisfaction au travail et leurs attentes.


Objectif du formulaire :


Le formulaire est conçu pour recueillir des informations statistiques sur les employés en trois sections :

Informations Personnelles (Nom, âge) pour connaître la répartition démographique des employés.

Contact Professionnel (Email, numéro de téléphone) pour enregistrer des informations de contact en cas de suivi.

Retour d’Expérience (commentaires sur la satisfaction au travail) pour analyser leur niveau de bien-être au sein de l’entreprise.
​

Détails techniques :


Votre formulaire doit être réalisé en HTML, CSS, et JavaScript uniquement. Il comportera trois sections, chaque section s’affichant séparément avec un bouton "Suivant" ou "Précédent" pour naviguer entre elles, vous dever ajoutez une validation en temps réel pour chaque champ (e.g., vérification d’un format d'email, de la longueur des champs, ou qu’un champ requis ne soit pas vide). Affichez un message d’erreur ou de validation en dessous de chaque champ pour guider l’utilisateur. À la fin, un bouton Soumettre permettra de confirmer l'envoi des données. À la soumission, un message de confirmation apparaîtra pour voir le recap des informations et un bouton pour valider puis le formulaire sera réinitialisé.


Technologies Utilisées :


**HTML5 **: Pour structurer le formulaire et chaque section de manière sémantique. CSS3 et Bootstrap: Pour styliser le formulaire et ajouter des transitions entre les sections. **JavaScript **: Pour gérer la navigation entre sections, les validations de saisie et la mise à jour de la barre de progression.
​

Bonus (optionnel)


Sauvegarde de la Progression : - Utilisez le Local Storage pour sauvegarder les réponses de l’utilisateur à chaque étape. En cas de rafraîchissement ou de fermeture accidentelle de la page, l’utilisateur pourra reprendre le formulaire là où il s’était arrêté, avec les réponses précédentes déjà remplies.
Indicateur de Progression : - Ajoutez une barre de progression en haut du formulaire pour indiquer le pourcentage de sections complétées. Cette barre se met à jour à chaque étape, permettant à l’utilisateur de voir où il en est dans le processus.
Thème Clair/Sombre : - Ajoutez une option permettant de changer de thème entre clair et sombre. Utilisez des CSS variables et JavaScript pour appliquer le thème sélectionné et sauvegardez le choix dans le Local Storage pour que le thème soit persistant lors de futures visites.
Animation de Transition : - Ajoutez des animations de transition lors de la navigation entre les sections (e.g., fondu enchaîné, glissement latéral) pour rendre l’expérience utilisateur plus fluide et agréable.
Mode Révision Rapide : - Une fois le formulaire complété, donnez la possibilité de revenir rapidement aux sections précédentes pour effectuer des corrections sans passer par les boutons “Suivant” et “Précédent”.