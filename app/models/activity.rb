class Activity < ApplicationRecord
    has_many :activity_bucket_lists
    has_many :likes
    has_many :bucket_lists, through: :activity_bucket_lists
    belongs_to :category
end
