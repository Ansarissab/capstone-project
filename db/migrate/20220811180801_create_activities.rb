class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.integer :category_id
      t.string :image_url
      t.string :name
      t.string :description
      t.string :location
      t.string :note

      t.timestamps
    end
  end
end
