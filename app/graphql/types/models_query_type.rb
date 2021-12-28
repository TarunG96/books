# frozen_string_literal: true

module Types::ModelsQueryType
  def all_books
    Book.all
  end

  def all_authors
    Author.all
  end

  def get_author(author_id:)
    Author.find_by(id: author_id)
  end

end
