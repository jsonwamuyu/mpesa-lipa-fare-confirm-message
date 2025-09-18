# Use a lightweight base
FROM alpine:latest

# Install curl
RUN apk add --no-cache curl

# Copy a text file into the image
COPY text.py /text.py

# Default command
CMD ["cat", "/text.py"]
