module Types
  class AuthorType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :age, Integer, null: true
    field :books, [Types::BookType], null: false

    def books
      object.books
    end

  end
end