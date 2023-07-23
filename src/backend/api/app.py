from flask import Flask, jsonify, request, abort
from flask_cors import CORS
import json


class BookAPI:
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app)  # Enable CORS for all routes

        # Load the books data from the JSON file
        with open("books.json") as file:
            self.books = json.load(file)

        @self.app.route("/getall", methods=["GET"])
        def get_all_books():
            return jsonify(self.books)

        @self.app.route("/<int:book_id>", methods=["GET"])
        def get_book_by_id(book_id):
            book = next((book for book in self.books if book["id"] == book_id), None)
            if book:
                return jsonify(book)
            else:
                return (
                    jsonify({"message": "BookId not found"}),
                    400,
                )

        @self.app.route("/add", methods=["POST"])
        def add_book():
            if (
                not request.json
                or "title" not in request.json
                or "author" not in request.json
                or "price" not in request.json
                or "rating" not in request.json
                or "url" not in request.json
                or "image" not in request.json
                or "author_link" not in request.json
                or "genre" not in request.json
            ):
                return (
                    jsonify(
                        {
                            "message": "Book addition failed. Please provide all required parameters: title, author, publisher."
                        }
                    ),
                    400,
                )

            max_id = max(book["id"] for book in self.books)

            new_id = max_id + 1

            new_book = {
                "id": new_id,
                "title": request.json["title"],
                "author": request.json["author"],
                "price": request.json["price"],
                "rating": request.json["rating"],
                "url": request.json["url"],
                "image": request.json["image"],
                "author_link": request.json["author_link"],
                "genre": request.json["genre"],
            }

            # Add the new book to the list of books
            self.books.append(new_book)

            # Update the JSON file with the new book
            with open("books.json", "w") as file:
                json.dump(self.books, file, indent=4)

            return jsonify({"message": f"Book with ID:{new_id} is added successfully."}), 201

        @self.app.route("/remove/<int:book_id>", methods=["DELETE"])
        def remove_book(book_id):
            book_index = next(
                (
                    index
                    for index, book in enumerate(self.books)
                    if book["id"] == book_id
                ),
                None,
            )
            if book_index is not None:
                removed_book = self.books.pop(book_index)
                # Rearrange IDs of remaining books
                for i in range(book_index, len(self.books)):
                    self.books[i]["id"] -= 1

                with open("books.json", "w") as file:
                    json.dump(self.books, file, indent=4)

                return jsonify(
                    {"message": f"Book with ID:{book_id} was removed successfully"}
                )
            else:
                return (
                    jsonify(
                        {
                            "message": "Book Deletion failed. Please provide valid BoookId."
                        }
                    ),
                    400,
                )

    def run(self):
        self.app.run(debug=True, port=5000)     # Run the Flask API on port 5000


if __name__ == "__main__":
    book_api = BookAPI()
    book_api.run()
