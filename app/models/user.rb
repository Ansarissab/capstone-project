class User < ApplicationRecord
    has_secure_password

    has_many :bucket_lists
    has_many :likes
    # has_many :activities, through: :likes
    # has_many :activities, through: :bucket_lists #--no direct link between activities
    #has_many :activities, through: :activity_bucket_lists
    #has_many :activity_bucket_lists, through: :bucket_lists ---redundant?
end
