for file in *.sass; do
    mv "$file" "$(basename "$file" .sass).css"
done