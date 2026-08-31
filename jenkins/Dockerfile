# Image Jenkins personnalisée avec Node.js 22 intégré.
# Nécessaire car les dépendances Supabase (@supabase/*) exigent Node >= 22.0.0,
# alors que l'image Jenkins LTS de base embarque Node 20.
FROM jenkins/jenkins:lts

USER root

# Installe Node.js 22 (LTS) via le dépôt officiel NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Vérifie que l'installation est correcte (échoue le build sinon)
RUN node -v && npm -v

USER jenkins
