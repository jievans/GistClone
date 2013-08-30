class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :gist_id
      t.integer :tag_id

      t.timestamps
    end

    add_index :taggings, :gist_id
    add_index :taggings, :tag_id
  end
end
