class User < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true
    validates :username, uniqueness: true

    has_many :bucket_lists
    has_many :likes, dependent: :destroy
    has_many :activities, through: :likes
    # has_many :activities, through: :bucket_lists 
   

end
