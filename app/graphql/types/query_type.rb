module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField
    include Types::ModelsQueryType

    field :all_books, [Types::BookType], null: false
    field :all_authors, [Types::AuthorType], null: false
    field :get_author, Types::AuthorType, null: false do
      argument :author_id, ID
    end
  end
end
