(function () {
    this.App = window.App || {};
    this.App.lang = {
        widgetName: 'Application internet AlvaKids',
        getTheRightSize: 'Trouvez la bonne taille:',
        continueShopping: 'Continuer mes achats',
        helpCenter: "Rubrique d'Aide",
        validation: {
            general: 'Veuillez remplir les champs indiqués en rose',
            username: {
                required: "Nom d'utilisateur obligatoire",
                invalid: "3 à 20 caractères. Lettre, chiffre, '-' et '_' seulement",
            },
            name: {
                required: 'Nom d'utilisateur obligatoire',
                invalid: "3 à 20 caractères. Lettre, chiffre, '-' et '_' seulement",
            },
            password: {
                required: 'Mot de passe obligatoire',
                invalid: 'Les mots de passe ne doivent comporter que des lettres et des chiffres seulement',
                notMatch: "Les mots de passe ne sont pas identiques",
            },
            new_password: {
                required: 'Nouveau mot de passe requis',
                invalid: 'Les mots de passe ne doivent comporter que des lettres et des chiffres seulement',
                notMatch: "Les mots de passe ne sont pas identiques",
            },
            email: {
                required: 'Adresse e-mail obligatoire',
                invalid: 'Adresse e-mail non valide',
            },
            year: {
                required: 'Année obligatoire',
                invalid: 'Année non valide',
            },
            month: {
                required: 'Mois obligatoire',
                invalid: 'Mois non valide',
            },
            day: {
                required: 'Jour obligatoire',
                invalid: 'Jour non valide',
            },
            question: {
                required: 'Champ obligatoire',
            },
            sex: {
                required: 'Sexe obligatoire',
            },
            gender: {
                required: 'Sexe obligatoire',
            },
            state: {
                required: 'Etat obligatoire',
            },
            tandc: {
                required: "Vous devez accepter les conditions d'utilisation",
            },
            weight: {
                required: 'Poids obligatoire',
            },
            height: {
                required: 'Taille obligatoire',
            },
            child_name: {
                required: 'Nom obligatoire',
            },
            ethnicity: {
                required: 'Ethnicité obligatoire',
            },
            date_of_birth: {
                required: 'Date de naissance obligatoire',
                invalid: 'Date de naissance non valide',
            }
        },
        navigation: {
            back: 'RETOUR',
            login: 'Connexion',
            signup: 'Inscription',
            getSize: 'Obtenir la taille',
            continueShopping: 'Continuer mes achats',
            manageAccount: 'Gérer mon compte',
            profiles: 'Profils',
            logout: 'Déconnexion',
            changePass: 'Changer le mot de passe',
            resetMyPass: 'Réinitialiser mon mot de passe',
        },
        page: {
            about: "A propos d'AlvaKids",
            howItWorks: 'Comment ça marche?',
            faq: 'FAQ',
            terms: "Conditions d'Utilisation",
            privacy: 'Politique de Confidentialité',
            help: 'Aide',
        },
        about: {
            heading: "Q'est ce qu'AlvaKids?",
            para1: "AlvaKids est un service qui vous aide à trouver la bonne taille pour vos enfants. Notre service est disponible en ligne et sur application mobile pour Android et iOs.",
            para2: 'Vous voulez en savoir plus? Rendez-vous à la rubrique <a href="#page/faq">"Aide"</a> pour consulter les FAQ ou sur notre site <a href="http://www.alvakids.com/" target="_blank">www.AlvaKids.com</a>.',
            para3: "Achetez en toute confiance avec AlvaKids!",
            version: "AlvaKids version v2.0",
        },
        register: {
            header: 'Créer votre compte',
            help: "C'est gratuit et ne prend que 30 secondes",
            userName: "Nom d'utilisateur",
            userNameOrEmail: "Nom d'utilisateur ou adresse e-mail",
            gender: 'Sexe',
            male: 'Homme',
            female: 'Femme',
            email: 'Adresse e-mail',
            password: 'Mot de passe',
            confirmPassword: 'Confirmation du mot de passe',
            learnMore: 'En savoir plus',
            tryFirst: 'Essayer AlvaKids',
            registerLater: 'et inscrivez-vous plus tard',
            error: "L'inscription a échoué",
            optin: "Je souhaite recevoir la newsletter d'AlvaKids.",
            tandc: 'J\'accepte les <a href="http://alvakids.com/terms_of_use.html" target="_blank">conditions d\'utilisation d\'Alva</a>.',
            howAltImage: 'img/how-works-img.png',
            description: "AlvaKids vous aide à trouver la bonne taille pour les vêtements de vos enfants. Utiliser AlvaKids est très facile; inscrivez-vous en créeant votre compte, puis créez un profil pour chacun de vos enfants grâce à quelques mensurations. AlvaKids génère ensuite la meilleure taille pour vos enfants dans n'importe quelle marque de vêtements. C'est aussi simple que ça! Au cours du temps, AlvaKids fait évoluer chaque profil en même temps que vos enfants, pour s'assurer que vous obtenez précisement la bonne indication de taille aujourd'hui et dans le futur. Mais ca ne s'arrête pas la; après s'etre inscrit sur AlvaKids, vous pouvez obtenir ces mêmes indications en magasin en téléchargeant l'application mobile AlvaKids sur l'iTunes App Store ou le Google Play Store. Téléchargez l'application gratuitement et connectez-vous avec le même compte que vous avez utilisé en ligne pour obtenir toutes vos informations intantanément sur votre téléphone!",
        },
        settings: {
            editExplanation: "Complétez votre compte en entrant les informations ci-dessous. Tous les champs marqués d'une * doivent être indiqués.",
            username: "Nom d'utilisateur",
            firstName: 'Prénom',
            lastName: 'Nom de famille',
            email: 'Adresse e-mail',
            password: 'Mot de passe',
            gender: 'Sexe',
            country: 'Pays de résidence',
            mobilePhone: 'Numéro de téléphone mobile',
            dateOfBirth: 'Date de naissance',
            state: 'Etat',
            city: 'Ville de résidence',
        },
        changePassword: {
            explanation: "Utilisez votre mot de passe actuel pour en créer un nouveau. Si vous avez perdu votre mot de passe, veuillez indiquer votre adresse e-mail ici, nous réinitialiserons votre mot de passe et vous l'enverrons par mail.",
            currentPassword: 'Mot de passe actuel',
            newPassword: 'Nouveau mot de passe',
            repeatNewPassword: 'Ressaisir le nouveau mot de passe',
            save: 'Sauvegarder',
        },
        signup: {       // Signup after try it now
            saveKidProfile: "Pour sauvegarder le profil de votre enfant, veuillez remplir les informations manquantes et vous inscrire sous votre propre nom.",
            reason: "Pour que nous puissions sauver le profil de votre enfant, vous devez créer votre propre compte. Après vous être inscrit, vous pourrez avoir accès à vos indications de taille en ligne et sur notre application mobile!",
        },
        login: {
            error: 'Erreur!',
        },
        tryNow: {
            addProfile: "Veuillez compléter les mensurations de votre enfant pour obtenir une indication de taille.",
            getRecommendation: 'Obtenir une indication',
        },
        miniWidget: {
            updateAndGetSize: "Mettre à jour et Obtenir la taille",
            helpText: "Veuillez vérifier ou mettre à jour les informations de votre enfant.",
        },
        kidProfileAdd: {
            help: 'Créez un profil pour vos enfants pour obtenir la bonne taille.',
            clickToStart: 'Cliquez ici pour commencer à ajouter des profils enfant',
            fillIn: "Veuillez compléter les mensurations de votre enfant pour obtenir une indication de taille.",
            edit: "Après avoir édité le profil, cliquez sur 'sauvegarder le profil' pour vous assurer que les changements effectués ont bien été pris en compte.",
            uploadPic: '<strong>Télécharger une photo de profil</strong> de votre enfant?',
            name: 'Nom de votre enfant',
            gender: 'Sexe',
            skinny: 'Mince',
            regular: 'Media',
            husky: 'Fort',
            longer: 'Plus longues',
            small: 'Petit',
            shorter: 'Plus courtes',
            medium: 'Moyen',
            big: 'Gros',
            male: 'Garçon',
            female: 'Fille',
            leg: 'Proportion des jambes',
            belly: 'Taille du ventre',
            proportion: 'Corpulence',
            foot: 'Pied',
            inch: 'pouce',
            cm: 'cm',
            kg: 'kg',
            inches: 'pouces',
            ft: 'pi/po',
            lbs: 'lb',
            stone: 'stone',
            stonelbs: 'stone/lbs',
            chooseFt: 'Ajouter une pointure ou la taille des pieds',
            footSize: 'Taille des pieds',
            shoeSize: 'Pointure',
            optional: '(optionnel)',
            save: 'Sauvegarder le profil',
            wide: 'Pointure large',
            ethnicity: 'Ethnicité',
            ethnicities: [
                          { key: "African: Central", name: "Africain du Centre" },
                          { key: "African: Eastern", name: "Africain de l'Est" },
                          { key: "African: Northern", name: "Africain du Nord" },
                          { key: "African: Southern", name: "Africain  du Sud" },
                          { key: "African: Western", name: "Africain  de l'Ouest" },
                          { key: "African-American", name: "Afro-Américain" },
                          { key: "Arab/Middle eastern", name: "Arabe / Moyen-Orient" },
                          { key: "Asian: Chinese", name: "Asiatique : Chinois" },
                          { key: "Asian: Indian/Pakistani", name: "Asiatique : Indien / Pakistanais" },
                          { key: "Asian: Japanese", name: "Asiatique : Japonais" },
                          { key: "Asian: Korean", name: "Asiatique : Coréen" },
                          { key: "Asian: South", name: "Sud-Asiatique" },
                          { key: "Caribbean/Creole", name: "Caraïbes / Créole" },
                          { key: "Caucasian", name: "Caucasien" },
                          { key: "Hispanic/Latin", name: "Hispanique / Latino" },
                          { key: "Maori/Aboriginal", name: "Aborigène/Maori" },
                          { key: "Mediterranean", name: "Méditerranéen" },
                          { key: "Native American", name: "Indien d'Amérique" },
                          { key: "Other/Mixed", name: "Autre/Métissé" }
            ],
        },
        kidProfile: {
            edit: 'Editer',
            gender: 'Sexe',
            height: 'Taille',
            weight: 'Poids',
            select: 'Sélectionner',
        },
        kidsProfiles: {
            intro: "Le profil de votre enfant a évolué dans notre système. Veuillez vérifier que les informations mises à jour correspondent bien aux mensurations actuelles de votre enfant.",
            add: 'Cliquez ici pour ajouter un profil',
            kidsImgAlt: 'votre profil enfant',
            height: 'Taille',
            weight: 'Poids',
        },
        faq: {
            header: 'Questions Fréquemment Posées (FAQ)',
            searchKeyword: 'Recherche par mot-clés',
            faqs: [
                   {
                   question: "Puis-je utiliser mon compte AlvaKids en magasin?",
                   answer: "Oui! Une fois votre compte utilisateur créé, vous pourrez l'utiliser en ligne et via les applications mobile. Lorsque vous mettez votre compte ou vos profils enfant à jour, ces informations aparaîtront instantanément en ligne et sur votre application mobile.",
                   },{
                   question: "Comment puis-je éditer mes profils enfants?",
                   answer: "Afin d'éditer vos profils enfant, cliquez sur le bouton \"Modifier\" du profil à ajuster, sur la page principale des profils accessible après s'être identifié. Vous pourrez alors modifier tous vos profils sauvegardés.",
                   },{
                   question: "Pourquoi est ce qu'AlvaKids a-t-il besoin de connaître l'ethnicité de mes enfants?",
                   answer: "Lorsque vos enfants grandissent, leurs profils évoluent avec eux. Nos calculs de croissance prennent en compte l'ethnicité pour s'assurer que vous obtenez précisement la bonne indication de taille aujourd'hui et dans le futur",
                   },{
                   question: "Comment puis-je changer mon mot de passe?",
                   answer: "Vous pouvez changer votre mot de passe dans le menu en haut à droite, qui apparaîtra en cliquant sur votre nom d'utilisateur. Vous trouverez alors l'option \"Modifier mot de passe\". Cliquer dessus vous redirigera vers la page ou vous pourrez effectuer cette modification.",
                   },{
                   question: "J'ai oublié mon mot de passe, que faire?",
                   answer: "Dans le cas ou vous avez perdu votre mot de passe, cliquez \"S'identifier\" sur la page d'accueil. En dessous des champs d'identification vous trouverez \"Mot de passe oublié?\". Cliquez sur ce lien puis entrez votre adresse email liée à ce compte. Nous vous enverrons alors un nouveau mot de passe par email.",
                   },{
                   question: "Comment puis-je supprimer un profil enfant?",
                   answer: "Dans le cas ou vous souhaiteriez supprimer un profil enfant, cliquez \"Modifier\" sur ce profil sur la page principale des profils. Sur les pages dédiée à chaque profil vous trouverez alors le bouton \"Supprimer ce profil\". Une fois supprimé, vous n'aurez plus accès au profil en question.",
                   },{
                   question: "Comment puis-je recevoir les nouveautés d'AlvaKids?",
                   answer: "Pour en savoir plus au sujet d'AlvaKids, vous pouvez visiter notre page <a href='https://www.facebook.com/AlvaKids' target='_blank'>Facebook</a>, nous suivre sur twitter (<a href='https://twitter.com/AlvaKids' target='_blank'>@AlvaKids</a>) ou jeter un oeil à <a href='http://www.alvakids.com/' target='_blank'>www.AlvaKids.com</a>. Vous trouverez alors plus d'informations au sujet de nos services et vous pourrez vous inscrire a notre newsletter.",
                   },{
                   question: "Que fais-je si ma question n'est pas dans cette liste?",
                   answer: "Dans le cas ou vous ne trouvez pas votre question, vous pouvez nous l'envoyer grâce au formulaire sur la droite, nous vous répondrons dans les plus brefs délais.",
                   },{
                   question: "Que faire dans le cas où mon enfant est trop grand pour l'application?",
                   answer: "AlvaKids est une application destinée aux filles et garçons jusqu'à l'âge de 16 ans. Il se peut également que certains enfants soient trop corpulents pour porter des tailles enfants, dans ce cas AlvaKids ne sera pas à même de générer une indication de taille. Pour ces enfants, nous vous conseillons alors de vous référer à notre service d'indication de taille pour adulte, <a href='http://www.alvafit.com'>AlvaFit</a>.",
                   },{
                   question: "Que fait AlvaKids avec mes données?",
                   answer: "Nous prenons grand soin de vos données, pour plus d'informations à ce sujet, veuillez vous référer à notre <a href='http://www.alvakids.com/privacy_policy.html' target='_blank'>politique de confidentialité</a> ainsi qu'à nos <a href='http://www.alvakids.com/terms_of_use.html' target='_blank'>conditions d'utilisation</a>.",
                   }
            ]
        },
        newQuestion: {
            header: "Vous n'avez pas trouvé votre question?",
            help: 'Faites le nous savoir ! Posez votre question et entrez votre adresse e-mail ci-dessous et nous vous répondrons dans les plus brefs délais.',
            submitQuestion: 'Formulez votre question ici',
            yourEmail: 'Votre adresse e-mail',
            send: 'Envoyer ma question',
        },
        recommendation: {
            bestSize: 'La meilleure taille pour votre enfant est:',
            error: 'Impossible de vous donner une indication',
            noSizeAvailable: 'Aucune taille disponible',
            downloadAppReason: "AlvaKids fera évoluer chaque profil en même temps que vos enfants pour s'assurer que vous obtenez la bonne indication de taille aujourd'hui et dans le futur. Pour obtenir des indications en magasin, téléchargez l'application mobile AlvaKids sur l'iTunes App Store ou le Google Play Store et connectez vous avec le même compte que vous utilisez en ligne.",
            registerReason: "Inscrivez-vous sur AlvaKids et nous stockerons vos profils pour vous aider à trouver la bonne taille pour vos enfants.  Au cours du temps, AlvaKids fait évoluer chaque profil en même temps que vos enfants, pour s'assurer que vous obtenez précisement la bonne indication de taille aujourd'hui et dans le futur.",
            saveThisProfile: 'Sauvegardez le profil pour obtenir une indication de taille pour tous les articles de chaque page.',
        },
        countries: [
                    { key: "AD", name: "ANDORRE" },
                    { key: "AE", name: "ÉMIRATS ARABES UNIS" },
                    { key: "AF", name: "AFGHANISTAN" },
                    { key: "AG", name: "ANTIGUA-ET-BARBUDA" },
                    { key: "AI", name: "ANGUILLA" },
                    { key: "AL", name: "ALBANIE" },
                    { key: "AM", name: "ARMÉNIE" },
                    { key: "AO", name: "ANGOLA" },
                    { key: "AQ", name: "ANTARCTIQUE" },
                    { key: "AR", name: "ARGENTINE" },
                    { key: "AS", name: "SAMOA AMÉRICAINES" },
                    { key: "AT", name: "AUTRICHE" },
                    { key: "AU", name: "AUSTRALIE" },
                    { key: "AW", name: "ARUBA" },
                    { key: "AX", name: "ÅLAND, ÎLES" },
                    { key: "AZ", name: "AZERBAÏDJAN" },
                    { key: "BA", name: "BOSNIE-HERZÉGOVINE" },
                    { key: "BB", name: "BARBADE" },
                    { key: "BD", name: "BANGLADESH" },
                    { key: "BE", name: "BELGIQUE" },
                    { key: "BF", name: "BURKINA FASO" },
                    { key: "BG", name: "BULGARIE" },
                    { key: "BH", name: "BAHREÏN" },
                    { key: "BI", name: "BURUNDI" },
                    { key: "BJ", name: "BÉNIN" },
                    { key: "BL", name: "SAINT-BARTHÉLEMY" },
                    { key: "BM", name: "BERMUDES" },
                    { key: "BN", name: "BRUNEI DARUSSALAM" },
                    { key: "BO", name: "BOLIVIE, l'ÉTAT PLURINATIONAL DE" },
                    { key: "BQ", name: "BONAIRE, SAINT-EUSTACHE ET SABA" },
                    { key: "BR", name: "BRÉSIL" },
                    { key: "BS", name: "BAHAMAS" },
                    { key: "BT", name: "BHOUTAN" },
                    { key: "BV", name: "BOUVET, ÎLE" },
                    { key: "BW", name: "BOTSWANA" },
                    { key: "BY", name: "BÉLARUS" },
                    { key: "BZ", name: "BELIZE" },
                    { key: "CA", name: "CANADA" },
                    { key: "CC", name: "COCOS (KEELING), ÎLES" },
                    { key: "CD", name: "CONGO, LA RÉPUBLIQUE DÉMOCRATIQUE DU" },
                    { key: "CF", name: "CENTRAFRICAINE, RÉPUBLIQUE" },
                    { key: "CG", name: "CONGO" },
                    { key: "CH", name: "SUISSE" },
                    { key: "CI", name: "CÔTE D'IVOIRE" },
                    { key: "CK", name: "COOK, ÎLES" },
                    { key: "CL", name: "CHILI" },
                    { key: "CM", name: "CAMEROUN" },
                    { key: "CN", name: "CHINE" },
                    { key: "CO", name: "COLOMBIE" },
                    { key: "CR", name: "COSTA RICA" },
                    { key: "CU", name: "CUBA" },
                    { key: "CV", name: "CAP-VERT" },
                    { key: "CW", name: "CURAÇAO" },
                    { key: "CX", name: "CHRISTMAS, ÎLE" },
                    { key: "CY", name: "CHYPRE" },
                    { key: "CZ", name: "TCHÈQUE, RÉPUBLIQUE" },
                    { key: "DE", name: "ALLEMAGNE" },
                    { key: "DJ", name: "DJIBOUTI" },
                    { key: "DK", name: "DANEMARK" },
                    { key: "DM", name: "DOMINIQUE" },
                    { key: "DO", name: "DOMINICAINE, RÉPUBLIQUE" },
                    { key: "DZ", name: "ALGÉRIE" },
                    { key: "EC", name: "ÉQUATEUR" },
                    { key: "EE", name: "ESTONIE" },
                    { key: "EG", name: "ÉGYPTE" },
                    { key: "EH", name: "SAHARA OCCIDENTAL" },
                    { key: "ER", name: "ÉRYTHRÉE" },
                    { key: "ES", name: "ESPAGNE" },
                    { key: "ET", name: "ÉTHIOPIE" },
                    { key: "FI", name: "FINLANDE" },
                    { key: "FJ", name: "FIDJI" },
                    { key: "FK", name: "FALKLAND, ÎLES (MALVINAS)" },
                    { key: "FM", name: "MICRONÉSIE, ÉTATS FÉDÉRÉS DE" },
                    { key: "FO", name: "FÉROÉ, ÎLES" },
                    { key: "FR", name: "FRANCE" },
                    { key: "GA", name: "GABON" },
                    { key: "GB", name: "ROYAUME-UNI" },
                    { key: "GD", name: "GRENADE" },
                    { key: "GE", name: "GÉORGIE" },
                    { key: "GF", name: "GUYANE FRANÇAISE" },
                    { key: "GG", name: "GUERNESEY" },
                    { key: "GH", name: "GHANA" },
                    { key: "GI", name: "GIBRALTAR" },
                    { key: "GL", name: "GROENLAND" },
                    { key: "GM", name: "GAMBIE" },
                    { key: "GN", name: "GUINÉE" },
                    { key: "GP", name: "GUADELOUPE" },
                    { key: "GQ", name: "GUINÉE ÉQUATORIALE" },
                    { key: "GR", name: "GRÈCE" },
                    { key: "GS", name: "GÉORGIE DU SUD-ET-LES ÎLES SANDWICH DU SUD" },
                    { key: "GT", name: "GUATEMALA" },
                    { key: "GU", name: "GUAM" },
                    { key: "GW", name: "GUINÉE-BISSAU" },
                    { key: "GY", name: "GUYANA" },
                    { key: "HK", name: "HONG KONG" },
                    { key: "HM", name: "HEARD-ET-ÎLES MACDONALD, ÎLE" },
                    { key: "HN", name: "HONDURAS" },
                    { key: "HR", name: "CROATIE" },
                    { key: "HT", name: "HAÏTI" },
                    { key: "HU", name: "HONGRIE" },
                    { key: "ID", name: "INDONÉSIE" },
                    { key: "IE", name: "IRLANDE" },
                    { key: "IL", name: "ISRAËL" },
                    { key: "IM", name: "ÎLE DE MAN" },
                    { key: "IN", name: "INDE" },
                    { key: "IO", name: "OCÉAN INDIEN, TERRITOIRE BRITANNIQUE DE L'" },
                    { key: "IQ", name: "IRAQ" },
                    { key: "IR", name: "IRAN, RÉPUBLIQUE ISLAMIQUE D'" },
                    { key: "IS", name: "ISLANDE" },
                    { key: "IT", name: "ITALIE" },
                    { key: "JE", name: "JERSEY" },
                    { key: "JM", name: "JAMAÏQUE" },
                    { key: "JO", name: "JORDANIE" },
                    { key: "JP", name: "JAPON" },
                    { key: "KE", name: "KENYA" },
                    { key: "KG", name: "KIRGHIZISTAN" },
                    { key: "KH", name: "CAMBODGE" },
                    { key: "KI", name: "KIRIBATI" },
                    { key: "KM", name: "COMORES" },
                    { key: "KN", name: "SAINT-KITTS-ET-NEVIS" },
                    { key: "KP", name: "CORÉE, RÉPUBLIQUE POPULAIRE DÉMOCRATIQUE DE" },
                    { key: "KR", name: "CORÉE, RÉPUBLIQUE DE" },
                    { key: "KW", name: "KOWEÏT" },
                    { key: "KY", name: "CAÏMANS, ÎLES" },
                    { key: "KZ", name: "KAZAKHSTAN" },
                    { key: "LA", name: "LAO, RÉPUBLIQUE DÉMOCRATIQUE POPULAIRE" },
                    { key: "LB", name: "LIBAN" },
                    { key: "LC", name: "SAINTE-LUCIE" },
                    { key: "LI", name: "LIECHTENSTEIN" },
                    { key: "LK", name: "SRI LANKA" },
                    { key: "LR", name: "LIBÉRIA" },
                    { key: "LS", name: "LESOTHO" },
                    { key: "LT", name: "LITUANIE" },
                    { key: "LU", name: "LUXEMBOURG" },
                    { key: "LV", name: "LETTONIE" },
                    { key: "LY", name: "LIBYE" },
                    { key: "MA", name: "MAROC" },
                    { key: "MC", name: "MONACO" },
                    { key: "MD", name: "MOLDOVA, RÉPUBLIQUE DE" },
                    { key: "ME", name: "MONTÉNÉGRO" },
                    { key: "MF", name: "SAINT-MARTIN(PARTIE FRANÇAISE)" },
                    { key: "MG", name: "MADAGASCAR" },
                    { key: "MH", name: "MARSHALL, ÎLES" },
                    { key: "MK", name: "MACÉDOINE, L'EX-RÉPUBLIQUE YOUGOSLAVE DE" },
                    { key: "ML", name: "MALI" },
                    { key: "MM", name: "MYANMAR" },
                    { key: "MN", name: "MONGOLIE" },
                    { key: "MO", name: "MACAO" },
                    { key: "MP", name: "MARIANNES DU NORD, ÎLES" },
                    { key: "MQ", name: "MARTINIQUE" },
                    { key: "MR", name: "MAURITANIE" },
                    { key: "MS", name: "MONTSERRAT" },
                    { key: "MT", name: "MALTE" },
                    { key: "MU", name: "MAURICE" },
                    { key: "MV", name: "MALDIVES" },
                    { key: "MW", name: "MALAWI" },
                    { key: "MX", name: "MEXIQUE" },
                    { key: "MY", name: "MALAISIE" },
                    { key: "MZ", name: "MOZAMBIQUE" },
                    { key: "NA", name: "NAMIBIE" },
                    { key: "NC", name: "NOUVELLE-CALÉDONIE" },
                    { key: "NE", name: "NIGER" },
                    { key: "NF", name: "NORFOLK, ÎLE" },
                    { key: "NG", name: "NIGÉRIA" },
                    { key: "NI", name: "NICARAGUA" },
                    { key: "NL", name: "PAYS-BAS" },
                    { key: "NO", name: "NORVÈGE" },
                    { key: "NP", name: "NÉPAL" },
                    { key: "NR", name: "NAURU" },
                    { key: "NU", name: "NIUÉ" },
                    { key: "NZ", name: "NOUVELLE-ZÉLANDE" },
                    { key: "OM", name: "OMAN" },
                    { key: "PA", name: "PANAMA" },
                    { key: "PE", name: "PÉROU" },
                    { key: "PF", name: "POLYNÉSIE FRANÇAISE" },
                    { key: "PG", name: "PAPOUASIE-NOUVELLE-GUINÉE" },
                    { key: "PH", name: "PHILIPPINES" },
                    { key: "PK", name: "PAKISTAN" },
                    { key: "PL", name: "POLOGNE" },
                    { key: "PM", name: "SAINT-PIERRE-ET-MIQUELON" },
                    { key: "PN", name: "PITCAIRN" },
                    { key: "PR", name: "PORTO RICO" },
                    { key: "PS", name: "PALESTINE, ÉTAT DE" },
                    { key: "PT", name: "PORTUGAL" },
                    { key: "PW", name: "PALAOS" },
                    { key: "PY", name: "PARAGUAY" },
                    { key: "QA", name: "QATAR" },
                    { key: "RE", name: "RÉUNION" },
                    { key: "RO", name: "ROUMANIE" },
                    { key: "RS", name: "SERBIE" },
                    { key: "RU", name: "RUSSIE, FÉDÉRATION DE" },
                    { key: "RW", name: "RWANDA" },
                    { key: "SA", name: "ARABIE SAOUDITE" },
                    { key: "SB", name: "SALOMON, ÎLES" },
                    { key: "SC", name: "SEYCHELLES" },
                    { key: "SD", name: "SOUDAN" },
                    { key: "SE", name: "SUÈDE" },
                    { key: "SG", name: "SINGAPOUR" },
                    { key: "SH", name: "SAINTE-HÉLÈNE, ASCENSION ET TRISTAN DA CUNHA" },
                    { key: "SI", name: "SLOVÉNIE" },
                    { key: "SJ", name: "SVALBARD ET ÎLE JAN MAYEN" },
                    { key: "SK", name: "SLOVAQUIE" },
                    { key: "SL", name: "SIERRA LEONE" },
                    { key: "SM", name: "SAINT-MARIN" },
                    { key: "SN", name: "SÉNÉGAL" },
                    { key: "SO", name: "SOMALIE" },
                    { key: "SR", name: "SURINAME" },
                    { key: "SS", name: "SOUDAN DU SUD" },
                    { key: "ST", name: "SAO TOMÉ-ET-PRINCIPE" },
                    { key: "SV", name: "EL SALVADOR" },
                    { key: "SX", name: "SAINT-MARTIN (PARTIE NÉERLANDAISE)" },
                    { key: "SY", name: "SYRIENNE, RÉPUBLIQUE ARABE" },
                    { key: "SZ", name: "SWAZILAND" },
                    { key: "TC", name: "TURKS-ET-CAÏCOS, ÎLES" },
                    { key: "TD", name: "TCHAD" },
                    { key: "TF", name: "TERRES AUSTRALES FRANÇAISES" },
                    { key: "TG", name: "TOGO" },
                    { key: "TH", name: "THAÏLANDE" },
                    { key: "TJ", name: "TADJIKISTAN" },
                    { key: "TK", name: "TOKELAU" },
                    { key: "TL", name: "TIMOR-LESTE" },
                    { key: "TM", name: "TURKMÉNISTAN" },
                    { key: "TN", name: "TUNISIE" },
                    { key: "TO", name: "TONGA" },
                    { key: "TR", name: "TURQUIE" },
                    { key: "TT", name: "TRINITÉ-ET-TOBAGO" },
                    { key: "TV", name: "TUVALU" },
                    { key: "TW", name: "TAÏWAN, PROVINCE DE CHINE" },
                    { key: "TZ", name: "TANZANIE, RÉPUBLIQUE-UNIE DE" },
                    { key: "UA", name: "UKRAINE" },
                    { key: "UG", name: "OUGANDA" },
                    { key: "UM", name: "ÎLES MINEURES ÉLOIGNÉES DES ÉTATS-UNIS" },
                    { key: "US", name: "ÉTATS-UNIS" },
                    { key: "UY", name: "URUGUAY" },
                    { key: "UZ", name: "OUZBÉKISTAN" },
                    { key: "VA", name: "SAINT-SIÈGE (ÉTAT DE LA CITÉ DU VATICAN)" },
                    { key: "VC", name: "SAINT-VINCENT-ET-LES GRENADINES" },
                    { key: "VE", name: "VENEZUELA, RÉPUBLIQUE BOLIVARIENNE DU" },
                    { key: "VG", name: "ÎLES VIERGES BRITANNIQUES" },
                    { key: "VI", name: "ÎLES VIERGES DES ÉTATS-UNIS" },
                    { key: "VN", name: "VIET NAM" },
                    { key: "VU", name: "VANUATU" },
                    { key: "WF", name: "WALLIS ET FUTUNA" },
                    { key: "WS", name: "SAMOA" },
                    { key: "YE", name: "YÉMEN" },
                    { key: "YT", name: "MAYOTTE" },
                    { key: "ZA", name: "AFRIQUE DU SUD" },
                    { key: "ZM", name: "ZAMBIE" },
                    { key: "ZW", name: "ZIMBABWE" }
        ],
        states: {
            US: [
            ]
        }
    }
}).call(this);
