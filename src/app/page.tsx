import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import ValueCard from "@/components/ValueCard";
import DataTable from "@/components/DataTable";
import InfoBox from "@/components/InfoBox";
import ToolCard from "@/components/ToolCard";
import OrgChart from "@/components/OrgChart";

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[13px] font-bold text-vc-darkblue border-l-4 border-vc-blue pl-2.5 mb-3">
      {children}
    </h3>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-10 sm:px-12 scroll-mt-14">
      {children}
    </section>
  );
}

function Block({ children }: { children: React.ReactNode }) {
  return <div className="mb-6">{children}</div>;
}

function Footer() {
  return (
    <div className="text-center text-[11px] text-vc-light pt-4 border-t border-vc-border mt-8">
      Vocalcom — Livret d&apos;accueil 2026 · rh@vocalcom.com
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══ COVER ═══ */}
      <div className="cover-deco bg-vc-blurple text-white px-6 py-14 sm:px-14 sm:py-16 min-h-svh flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <div className="mb-8 sm:mb-12">
            <Image
              src="/logo-vocalcom.svg"
              alt="Vocalcom"
              width={280}
              height={64}
              className="w-[220px] sm:w-[280px] h-auto"
              priority
            />
          </div>
          <h1 className="text-[28px] sm:text-[clamp(36px,7vw,52px)] font-extrabold leading-[1.1] mb-4">
            <span className="text-vc-blue">Livret</span>
            <br />
            <span className="text-vc-yellow">d&apos;accueil</span>
            <br />
            <span className="text-vc-red">Vocalcom</span>
          </h1>
          <p className="text-[15px] text-white/75 max-w-[400px] leading-relaxed mb-10 sm:mb-12">
            Tout ce que vous devez savoir pour bien démarrer votre aventure chez
            Vocalcom.
          </p>
          <div className="w-[50px] h-1 bg-vc-orange rounded-sm mb-8 sm:mb-10" />
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { val: "1 200+", lbl: "Clients dans le monde" },
              { val: "47+", lbl: "Pays" },
              { val: "1B+", lbl: "Interactions / an" },
              { val: "1995", lbl: "Année de fondation" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="text-xl sm:text-[26px] font-extrabold text-vc-yellow">
                  {s.val}
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[11px] text-white/40 relative z-10 mt-12">
          <strong className="text-white/70">Vocalcom</strong> — Direction des
          Ressources Humaines · 2026
        </div>
      </div>

      {/* ═══ 1. BIENVENUE ═══ */}
      <Section id="bienvenue">
        <SectionHeader num={1} title="Mot de bienvenue" />
        <Block>
          <p className="text-[13px] leading-relaxed mb-2">
            Chère nouvelle collaboratrice, cher nouveau collaborateur,
          </p>
          <p className="text-[13px] leading-relaxed mb-2">
            Nous sommes ravis de vous accueillir au sein de l&apos;équipe
            Vocalcom. Vous rejoignez une entreprise leader dans les solutions de
            centre de contact omnicanal, reconnue pour son innovation
            technologique — désormais <strong>AI-First</strong> — et la qualité
            de ses équipes à travers le monde.
          </p>
          <p className="text-[13px] leading-relaxed mb-2">
            Ce livret a été conçu pour vous accompagner dans vos premiers pas et
            vous donner toutes les clés pour vous sentir à l&apos;aise
            rapidement. N&apos;hésitez pas à le garder comme référence tout au
            long de votre intégration.
          </p>
          <p className="text-[13px] leading-relaxed italic text-vc-light mt-3">
            — La Direction des Ressources Humaines, Vocalcom
          </p>
        </Block>

        {/* ═══ 2. CULTURE ═══ */}
        <div className="mt-10" id="culture">
          <SectionHeader num={2} title="Culture d'entreprise & valeurs" />
        </div>

        <Block>
          <BlockTitle>Qui sommes-nous ?</BlockTitle>
          <p className="text-[13px] leading-relaxed mb-2">
            Fondé en 1995, Vocalcom est un éditeur français, présent à
            l&apos;international, spécialiste des solutions de gestion des
            interactions clients multicanal. Avec{" "}
            <strong>plus de 30 ans d&apos;expérience</strong>, la société
            connaît aujourd&apos;hui une nouvelle dynamique avec le rachat par
            son fondateur <strong>Anthony Dinis</strong>. Siège et R&D basés en{" "}
            <strong>France</strong>.
          </p>
          <p className="text-[13px] leading-relaxed">
            Notre ambition :{" "}
            <strong>
              accélérer la transformation omnicanale de nos clients en intégrant
              de nombreuses innovations basées sur l&apos;intelligence
              artificielle, tout en maîtrisant les coûts.
            </strong>
          </p>
        </Block>

        <Block>
          <BlockTitle>Vocalcom en chiffres</BlockTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { val: "1 200+", lbl: "Clients dans le monde", color: "border-t-vc-blue" },
              { val: "1 Mrd+", lbl: "Interactions / an", color: "border-t-vc-orange" },
              { val: "150+", lbl: "Collaborateurs", color: "border-t-vc-purple" },
              { val: "13", lbl: "Bureaux dans le monde", color: "border-t-vc-green" },
              { val: "50+", lbl: "Pays", color: "border-t-vc-yellow" },
              { val: "80+", lbl: "Partenaires", color: "border-t-vc-red" },
            ].map((s) => (
              <div
                key={s.lbl}
                className={`bg-vc-bg rounded-lg px-4 py-3.5 border-t-[3px] text-center ${s.color}`}
              >
                <div className="text-xl font-extrabold text-vc-red">{s.val}</div>
                <div className="text-[11px] text-vc-light mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <BlockTitle>Notre stratégie — 3 piliers</BlockTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ValueCard emoji="👤" name="Une expertise" desc="Humaine, métier de la relation client, collaboration durable et internationale." color="blue" />
            <ValueCard emoji="☁️" name="Une solution — Hermes360" desc="Omnicanale, multilingue, conversationnelle et AI-ready." color="orange" />
            <ValueCard emoji="🚀" name="L'innovation" desc="Hermes Digital Journey, Best Time to Call, Agent IA, HUCC, biométrie vocale." color="red" />
          </div>
        </Block>

        <Block>
          <BlockTitle>Notre solution phare — Hermes360</BlockTitle>
          <DataTable
            headers={["Fonctionnalité", "Détail"]}
            rows={[
              ["🔊 Omnicanal", "Voix, email, chat, SMS, WhatsApp, réseaux sociaux — une seule interface"],
              ["🤖 Agent IA", "Vocal, chat & email — automatisation et assistance en temps réel"],
              ["📊 Supervision & BI", "+1 500 KPI métiers, tableaux de bord personnalisables par IA"],
              ["🔓 Biométrie vocale", "Authentification sécurisée, rapide, réduction du risque de fraude"],
              ["🎯 Quality Monitoring", "Automatisation du QM, analyse de sentiments, historisation des conversations"],
              ["☁️ Hébergement", "Cloud ou On-Premise"],
              ["🔗 Intégrations CRM", "Salesforce, Microsoft Dynamics, Zendesk, HubSpot et +200 connecteurs"],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Ce qui nous distingue</BlockTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ValueCard emoji="🌎" name="Environnement humain & multiculturel" desc="Près de 30 nationalités au sein du Groupe, présent dans plus de 15 pays. En 2025, 99 % des collaborateurs sont en CDI — la stabilité de l'emploi est une priorité concrète." color="blue" />
            <ValueCard emoji="🎯" name="Une mission qui a du sens" desc="Améliorer les conditions de travail des agents en centre de contact et proposer des solutions respectueuses des personnes." color="orange" />
            <ValueCard emoji="🤝" name="Culture de l'intégrité" desc="Code d'éthique, politique anti-corruption et dispositif d'alerte confidentiel : des repères clairs et des canaux protégés." color="red" />
            <ValueCard emoji="🌱" name="Engagement climatique" desc="Bilan carbone mesuré (Scopes 1, 2 & 3), déplacements rationalisés. Réduction de la facture électrique de 77 % entre 2023 et 2025." color="purple" />
            <ValueCard emoji="🏛️" name="Gouvernance sociale active" desc="CSE réuni 5 fois par an en 2025, enquêtes internes régulières. Le dialogue social est une réalité, pas une formalité." color="green" />
          </div>
        </Block>

        <Block>
          <BlockTitle>Nos valeurs</BlockTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ValueCard emoji="🚀" name="Innovation AI-First" desc="Nous plaçons l'IA au cœur de nos solutions pour augmenter les capacités humaines." color="blue" />
            <ValueCard emoji="🤝" name="Collaboration" desc="Nous travaillons ensemble, sans silos, en France et à l'international." color="orange" />
            <ValueCard emoji="🎯" name="Excellence client" desc="Nous visons la qualité et le ROI mesurable dans tout ce que nous faisons." color="red" />
            <ValueCard emoji="💡" name="Agilité" desc="Nous nous adaptons rapidement aux évolutions du marché et des usages." color="purple" />
            <ValueCard emoji="🌐" name="Diversité" desc="Nous valorisons les profils et perspectives variés dans nos équipes." color="green" />
            <ValueCard emoji="💬" name="Transparence" desc="Feedback ouvert, bienveillant et constructif à tous les niveaux." color="yellow" />
          </div>
        </Block>
        <Footer />
      </Section>

      {/* ═══ 3. ÉQUIPES ═══ */}
      <Section id="equipes">
        <SectionHeader num={3} title="Équipes & parcours d'intégration" />

        <Block>
          <BlockTitle>Structure des équipes</BlockTitle>
          <DataTable
            headers={["Direction", "Périmètre"]}
            rows={[
              ["Direction Générale", "Stratégie & gouvernance"],
              ["Direction Produit & Technologie (CTO)", "R&D, IA, produit, architecture"],
              ["Direction Commerciale & Marketing", "Ventes, marketing, partenaires"],
              ["Direction Client (Customer Success)", "Satisfaction et fidélisation clients"],
              ["Direction des Opérations", "Delivery, support, qualité"],
              ["Direction des Ressources Humaines", "RH, recrutement, formation"],
              ["Direction Financière", "Finance, contrôle de gestion, comptabilité"],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Organigramme du Groupe</BlockTitle>
          <OrgChart />
        </Block>

        <Block>
          <BlockTitle>Votre parcours d&apos;intégration</BlockTitle>
          <div className="tl">
            {[
              {
                week: "Semaine 1",
                title: "Découverte",
                items: [
                  "Accueil RH & remise du matériel",
                  "Visite des locaux et présentation des équipes",
                  "Sessions d'onboarding produit & outils",
                ],
              },
              {
                week: "Semaines 2 à 4",
                title: "Montée en compétences",
                items: [
                  "Formation produit et formation au poste",
                  "Premiers échanges avec les équipes clés",
                  "Point d'étape avec le manager (fin de mois)",
                ],
              },
              {
                week: "Mois 2–3",
                title: "Intégration opérationnelle",
                items: [
                  "Prise en main complète du poste",
                  "Objectifs de la période d'essai définis",
                  "Entretien de suivi à 3 mois",
                ],
              },
            ].map((t) => (
              <div className="tl-item" key={t.week}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-vc-blue mb-0.5">
                  {t.week}
                </div>
                <div className="text-sm font-bold text-vc-darkblue mb-1.5">
                  {t.title}
                </div>
                <ul className="tl-list list-none space-y-0.5 text-[12.5px]">
                  {t.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>
        <Footer />
      </Section>

      {/* ═══ 4. RH ═══ */}
      <Section id="rh">
        <SectionHeader num={4} title="Processus RH" />

        <Block>
          <BlockTitle>Horaires & organisation du travail</BlockTitle>
          <DataTable
            headers={["Rubrique", "Détail"]}
            rows={[
              ["Horaires", "9h00 – 18h00"],
              [
                "Télétravail",
                "<strong>1 jour par semaine</strong>, uniquement le <strong>mardi, mercredi ou jeudi</strong>, selon les impératifs du service. Aucun télétravail accordé sur une semaine comportant un autre jour d'absence (CP, RTT, jour férié, maladie, etc.). En vigueur depuis le 1er février 2026.",
              ],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Gestion des absences — Outil Lucca</BlockTitle>
          <p className="text-[13px] leading-relaxed mb-3">
            Toutes vos demandes d&apos;absence (congés payés, RTT, absences
            exceptionnelles) et la déclaration de votre jour de télétravail se
            font via <strong>Lucca</strong>, notre outil centralisé. Il est
            accessible depuis un PC, une tablette ou un smartphone.
          </p>
          <DataTable
            headers={["Fonctionnalité", "Détail"]}
            rows={[
              ["🔗 Accès", "<strong>https://vocalcom.ilucca.net/</strong> — connexion via SSO (identifiants habituels)"],
              ["📅 Soldes", "Consultez vos soldes de congés en temps réel et simulez vos poses futures"],
              ["📋 Demandes", "CP, RTT et absences exceptionnelles en quelques clics"],
            ]}
          />

          <BlockTitle>Déclarer son télétravail dans Lucca</BlockTitle>
          <div className="tl mt-2">
            {[
              "Cliquez sur <strong>« Absences »</strong> dans le menu gauche de l'écran d'accueil",
              "Sélectionnez un <strong>jour sur le calendrier</strong> de la page d'accueil",
              "Cliquez sur <strong>« Poursuivre ma demande »</strong> en bas à droite",
              "Sélectionnez <strong>« Choisir un autre type d'absence »</strong> puis <strong>« Télétravail »</strong>",
            ].map((step, i) => (
              <div className="tl-item" key={i}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-vc-blue mb-0.5">
                  Étape {i + 1}
                </div>
                <ul className="tl-list list-none text-[12.5px]">
                  <li dangerouslySetInnerHTML={{ __html: step }} />
                </ul>
              </div>
            ))}
          </div>
          <InfoBox variant="orange">
            ⚠️ <strong>Première connexion :</strong> Vous recevrez deux emails.
            1/ Cliquez sur « Activer votre compte ». 2/ Cliquez sur « Accéder
            directement à l&apos;application ». Puis choisissez{" "}
            <strong>« Se connecter avec votre compte entreprise »</strong> (SSO).
          </InfoBox>
        </Block>

        <Block>
          <BlockTitle>Congés payés</BlockTitle>
          <DataTable
            headers={["Rubrique", "Détail"]}
            rows={[
              ["📅 Nombre de jours", "25 jours ouvrés / an"],
              ["✔ Validation", "Validation expresse du supérieur hiérarchique requise — au plus tard <strong>1 mois avant</strong> la prise effective. L'absence de validation ne vaut pas accord."],
              ["🏖️ Période légale", "Du 1er mai au 31 octobre. Au moins <strong>2 semaines consécutives</strong> entre le 1er juin et le 30 septembre."],
              ["⚠️ Solde N-1", "Les congés de l'année précédente doivent être soldés au <strong>31 mai</strong>. Aucun report accordé à compter du 1er juin 2026."],
              ["🤒 Congé maladie", "Selon législation — arrêt à transmettre sous 48h + CPAM"],
              ["📅 Congé exceptionnel", "Selon motif — contacter les RH"],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>RTT</BlockTitle>
          <DataTable
            headers={["Année", "Jours RTT", "Jours travaillés"]}
            rows={[
              ["2026", "<strong>10 jours</strong>", "218 jours"],
              ["2027", "<strong>13 jours</strong>", "218 jours"],
            ]}
          />
          <p className="text-[12.5px] leading-relaxed">
            Les RTT peuvent être pris par jour entier ou demi-journée, accolés
            entre eux ou à des congés payés. Si le solde est positif : minimum 1
            RTT et maximum 2 RTT par mois. Les RTT 2025 non pris au 31 décembre
            sont reportables jusqu&apos;au <strong>31 mars 2026</strong>.
          </p>
          <InfoBox>
            📅 <strong>Journée de solidarité 2026 :</strong> fixée au{" "}
            <strong>25 mai 2026</strong> (lundi de Pentecôte). Journée non
            chômée, sans rémunération supplémentaire. Les collaborateurs ne
            souhaitant pas travailler doivent poser un CP ou RTT, soumis à
            validation du manager.
          </InfoBox>
        </Block>

        <Block>
          <BlockTitle>Paie & avantages</BlockTitle>
          <DataTable
            headers={["Avantage", "Détail"]}
            rows={[
              ["💰 Bulletin de paie", "Remis à la fin de chaque mois dans votre coffre-fort numérique personnel sur <strong>eDocPerso</strong>"],
              ["🏥 Mutuelle", "Affiliation dans les 30 jours suivant l'embauche"],
              ["🍽 Tickets restaurant", "Valeur faciale de <strong>9,50 €</strong> par jour travaillé, pris en charge à <strong>59,26 % par l'employeur</strong> (soit 5,63 € employeur / 3,87 € à votre charge). Gérés via la carte <strong>Swile</strong>."],
              ["🚃 Transport", "Prise en charge 50% du titre de transport en commun"],
            ]}
          />
          <InfoBox variant="orange">
            📩 <strong>Contact RH :</strong> Pour toute question — rh@vocalcom.com
          </InfoBox>
        </Block>
        <Footer />
      </Section>

      {/* ═══ 5. IT & OUTILS ═══ */}
      <Section id="outils">
        <SectionHeader num={5} title="Outils & IT" />

        <Block>
          <BlockTitle>Checklist — Vos 4 premières heures</BlockTitle>
          <ul className="space-y-0">
            {[
              "<strong>Premier accès :</strong> Connectez-vous avec l'identifiant et le mot de passe temporaire fournis.",
              "<strong>Sécurité :</strong> Changez immédiatement votre mot de passe lors de cette première connexion (obligatoire).",
              "<strong>MFA :</strong> Installez <strong>Microsoft Authenticator</strong> sur votre téléphone pour l'authentification multifacteur.",
              "<strong>Identification :</strong> Notez le nom de votre machine (étiquette sous le portable ou via les paramètres).",
              "<strong>Communication :</strong> Ouvrez <strong>Outlook</strong> et vérifiez votre boîte e-mail, ouvrez <strong>Teams</strong> et testez votre casque audio.",
              "Badge d'accès aux locaux remis",
              "Formation plateforme Vocalcom AI planifiée",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 py-2 border-b border-vc-border last:border-b-0 text-[12.5px]"
              >
                <div className="cb" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </Block>

        <Block>
          <BlockTitle>Votre équipement</BlockTitle>
          <DataTable
            headers={["Matériel", "Détails & Usage"]}
            rows={[
              ["💻 Poste de travail", "Ordinateur remis par votre responsable ou le service IT."],
              ["🔧 Périphériques", "Casque audio (Teams) et écran(s) supplémentaire(s) selon votre configuration."],
              ["🧹 Entretien", "Produits adaptés pour l'écran, éviter toute exposition aux liquides."],
              ["🔒 Responsabilité", "Tout matériel confié est sous votre responsabilité personnelle."],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Accès & identifiants — Entra ID / Microsoft 365</BlockTitle>
          <p className="text-[13px] leading-relaxed">
            Votre adresse e-mail (<strong>p.nom@vocalcom.com</strong>) est votre
            identifiant unique pour Windows, Outlook, Teams et le SSO. Le même
            mot de passe de session Windows s&apos;applique à l&apos;ensemble de
            l&apos;environnement Microsoft 365.
          </p>
          <InfoBox>
            ⚠️ <strong>Confidentialité :</strong> Ne communiquez jamais votre
            mot de passe, même à un collègue ou un technicien. En cas
            d&apos;oubli ou de blocage, utilisez le bouton « mot de passe
            oublié » ou contactez l&apos;IT.
          </InfoBox>
        </Block>

        <Block>
          <BlockTitle>Outils collaboratifs Microsoft 365</BlockTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ToolCard icon="📧" name="Outlook" usage="Messagerie et gestion du calendrier partagé." />
            <ToolCard icon="💬" name="Microsoft Teams" usage="Appels, visioconférences, messagerie instantanée et espaces d'équipe." />
            <ToolCard icon="📁" name="SharePoint" usage="Intranet et gestion documentaire partagée par service." />
            <ToolCard icon="☁️" name="OneDrive" usage="Stockage personnel dans le cloud, synchronisé sur votre poste." />
            <ToolCard icon="📄" name="Office (Word, Excel, PowerPoint)" usage="Disponible en web, bureau et mobile." />
            <ToolCard icon="⚡" name="Plateforme Vocalcom AI" usage="Plateforme AI-First omnicanal — formation dédiée prévue." />
          </div>
          <InfoBox>
            💡 <strong>Note :</strong> Des logiciels métiers spécifiques peuvent
            être ajoutés selon votre service par votre responsable.
          </InfoBox>
        </Block>

        <Block>
          <BlockTitle>Réseau & mobilité</BlockTitle>
          <DataTable
            headers={["Contexte", "Détail"]}
            rows={[
              ["📶 Wi-Fi bureau", "Configuré automatiquement ou par l'IT. Accès visiteurs : VCLWFR_GUEST."],
              ["🖨 Impression", "Ajoutez les imprimantes via les paramètres Windows. Code PIN pour documents confidentiels, privilégiez recto-verso ou PDF."],
              ["🏠 Télétravail", "Microsoft 365 et apps SaaS accessibles sans VPN. Évitez les réseaux publics (gares, hôtels) — privilégiez votre hotspot personnel."],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Sécurité & bonnes pratiques</BlockTitle>
          <DataTable
            headers={["Règle", "Détail"]}
            rows={[
              ["🔒 Verrouillage", "Verrouillez systématiquement votre session (<strong>Windows + L</strong>) dès que vous quittez votre bureau."],
              ["💻 Périphériques", "Ne connectez pas de clés USB personnelles et n'installez aucun logiciel sans autorisation IT."],
              ["💣 Phishing", "Signalez tout e-mail suspect sans cliquer sur les liens ni ouvrir les pièces jointes."],
              ["💾 Sauvegarde", "Enregistrez vos fichiers sur OneDrive ou SharePoint, jamais uniquement en local."],
              ["☁️ Absences", "Configurez votre réponse automatique dans Outlook (Fichier — Réponses automatiques) avec vos dates et un contact d'urgence."],
            ]}
          />
        </Block>

        <InfoBox variant="orange">
          🔧 <strong>Support IT — Portail de ticketing :</strong>{" "}
          vocalcomx.atlassian.net/servicedesk/customer/portal/1 ·{" "}
          <strong>Urgences</strong> (ransomware, vol, incident sécurité) :
          signalez immédiatement au service IT, même en dehors des horaires.
        </InfoBox>
        <Footer />
      </Section>

      {/* ═══ 6. BUREAUX ═══ */}
      <Section id="bureaux">
        <SectionHeader num={6} title="Nos bureaux — Tour EQHO" />

        <Block>
          <BlockTitle>Adresse & accès</BlockTitle>
          <DataTable
            headers={["Rubrique", "Détail"]}
            rows={[
              ["📍 Adresse", "<strong>2, avenue Gambetta — La Défense 5 — 92066 Paris La Défense</strong>"],
              ["📅 Horaires d'ouverture", "Lundi au vendredi, 7h00 à 19h30 — Sécurité H24/7j"],
              ["🚇 Métro", "Ligne 1 — Station Esplanade de la Défense ou La Défense Grande Arche"],
              ["🚆 RER / Tramway", "RER A & E, T2 — Station La Défense Grande Arche"],
              ["🚌 Bus", "Lignes 275, 278 (arrêt Carnot, 80m) · Lignes 73, 174 (arrêt Gambetta, 280m)"],
              ["🚗 En voiture", "GPS : 48°53'32\"N 2°14'48\"E · A14/RN13 — Bd circulaire — Avenue Gambetta"],
              ["🏗️ Parking", "3 niveaux (SS2, SS3, SS4) · 1 110 places · accès par badge · 50 bornes électriques · 24 places PMR"],
              ["🚲 Vélo", "Local vélos sécurisé SS1 · 150 racks · 25 bornes recharge vélo électrique · douches disponibles"],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Badge d&apos;accès</BlockTitle>
          <p className="text-[13px] leading-relaxed">
            Votre badge nominatif vous est remis à l&apos;arrivée. Il donne
            accès à l&apos;immeuble, aux étages, au parking, au local vélos et
            au paiement en restauration. En cas de perte, signalez-le
            immédiatement à votre référent entreprise. En cas d&apos;oubli, un
            badge visiteur temporaire est disponible à l&apos;accueil.
          </p>
          <InfoBox>
            📞 <strong>Accueil Courbevoie :</strong> 01 55 24 45 05 ·{" "}
            <strong>Accueil Défense :</strong> 01 55 24 45 13
          </InfoBox>
        </Block>

        <Block>
          <BlockTitle>🍽 Restauration</BlockTitle>
          <DataTable
            headers={["Restaurant", "Description", "Horaires"]}
            rows={[
              ["<strong>Le Reflet</strong>", "Brasserie service à table — 150 places — Rez-de-Jardin", "11h45 – 14h00"],
              ["<strong>Green</strong>", "RIE self classique — 1 700 repas — Rez-de-Jardin", "11h45 – 14h00"],
              ["<strong>L'Horizon</strong>", "Cafétéria 150 places + terrasse — RDC", "08h00 – 17h00"],
              ["<strong>Le Prisme</strong>", "Restaurant « Fresh & bio » 700 places + terrasse — RDC", "11h30 – 16h00"],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>🏋️ Espace Forme (RDC & R+1)</BlockTitle>
          <p className="text-[13px] leading-relaxed mb-3">
            Cardio-training, musculation, 2 terrains de squash, cours
            collectifs, Pilates, yoga et CalmSpace (sieste flash,
            luminothérapie). Vestiaires et douches sur place.
          </p>
          <DataTable
            headers={["Créneau", "Horaires"]}
            rows={[
              ["Matin", "7h30 – 9h30"],
              ["Midi", "11h30 – 14h30"],
              ["Soir", "16h00 – 20h00 (fermé le vendredi)"],
            ]}
          />
        </Block>

        <Block>
          <BlockTitle>Autres espaces</BlockTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ToolCard icon="🎤" name="Auditorium" usage="350 places en gradins, système audio haut de gamme, régie AV. Réservation via l'Hospitality Manager." />
            <ToolCard icon="🏛️" name="Le Lounge (R+1)" usage="120 personnes, configurable, vestiaire grande capacité." />
            <ToolCard icon="🏛️" name="Conciergerie (RDC)" usage="Pressing, paniers bio, coiffure, services admin… Lun–ven 8h–19h30 · 06 26 26 91 81" />
            <ToolCard icon="🚬" name="Fumeurs" usage="L'immeuble et ses abords sont non-fumeur. Seules les zones fumeurs dédiées sont équipées de cendriers." />
          </div>
        </Block>

        <Block>
          <BlockTitle>🚨 Sécurité & urgences</BlockTitle>
          <DataTable
            headers={["Service", "Contact"]}
            rows={[
              ["🔥 PC Sécurité Incendie (H24)", "01 47 47 17 31"],
              ["🛡️ PC Sûreté / Gardiennage (H24)", "01 47 45 02 87"],
              ["📦 Courrier (R-1)", "8h00 – 18h00, lun–ven"],
              ["🚚 Livraisons (R-1, rue de Strasbourg)", "6h30 – 14h30, lun–ven"],
              ["🔧 Maintenance technique", "Via votre référent entreprise"],
              ["🛗 Ascenseurs OTIS", "0800 24 24 07"],
            ]}
          />
          <InfoBox>
            ♻️ <strong>Tri sélectif :</strong> Local déchets au R-1 — papier,
            carton, plastique, canettes, verre, DEEE. 100% des déchets de la
            tour sont valorisés.
          </InfoBox>
        </Block>

        <Block>
          <BlockTitle>Ressources utiles</BlockTitle>
          <DataTable
            headers={["Document", "Accès"]}
            rows={[
              ["📁 Intranet / base documentaire", "À compléter"],
              ["🔗 Site produit AI", "ai.vocalcom.com"],
              ["📖 Règlement intérieur", "Remis en main propre ou lien interne"],
              ["🩺 Médecine du travail", "Horizon Santé Travail — 26, boulevard Aristide Briand — 92400 Courbevoie"],
              ["🤝 Représentant du personnel (CSE)", "Ashref Kahia — a.kahia@vocalcom.com"],
            ]}
          />
        </Block>

        {/* Welcome block */}
        <div className="welcome-deco bg-grad-blue rounded-xl px-6 py-7 sm:px-8 text-white text-center relative overflow-hidden">
          <p className="text-lg font-extrabold mb-2 relative z-10">
            Bienvenue dans l&apos;équipe ! 👋
          </p>
          <p className="text-[13px] text-white/80 max-w-[400px] mx-auto leading-relaxed relative z-10">
            N&apos;hésitez pas à poser toutes vos questions à votre manager ou
            l&apos;équipe RH. Nous sommes là pour vous accompagner dans cette
            nouvelle aventure.
          </p>
          <p className="mt-3.5 text-[13px] font-bold text-vc-yellow relative z-10">
            rh@vocalcom.com
          </p>
        </div>

        <div className="text-center text-[11px] text-vc-light pt-4 border-t border-vc-border mt-8">
          Vocalcom — Livret d&apos;accueil 2026 · Document confidentiel réservé
          aux nouveaux collaborateurs · vocalcom.com
        </div>
      </Section>
    </>
  );
}
