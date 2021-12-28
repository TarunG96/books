# frozen_string_literal: true

module Types::ModelsQueryType
  def all_books
    Book.all
  end
end
