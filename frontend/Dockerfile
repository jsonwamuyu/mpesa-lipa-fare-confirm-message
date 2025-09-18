# # ----Build Stage(frontend)----
# FROM node:22-alpine AS build

# # # Add labels to the image
# LABEL "version"="1.0"
# LABEL "description"="Konfirm M-Payment Frontend"
# LABEL "maintainer"="Johnson Wamuyu jysonmuchiri@gmail.com"

# # Working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy code
# COPY . /app

# # Build the app
# RUN npm run build

# # ----Production stage--------
# FROM nginx:alpine

# # Copy build output from previous stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Remove default config and use custom one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 8080

# CMD ["nginx", "-g", "daemon off"]



# ------Build Stage------
# Use alpine as a base image
FROM node:22-alpine AS build

# Add labels to the image
LABEL "version"="1.0"
LABEL "description"="Konfirm M-Payment Frontend"
LABEL "maintainer"="Johnson Wamuyu jysonmuchiri@gmail.com"

#Working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

#Expose port 8080
EXPOSE 5173

# Copy the rest of the application code
COPY . /app

# Start the application
CMD ["npm", "run", "dev"]