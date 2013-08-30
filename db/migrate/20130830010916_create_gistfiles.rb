class CreateGistfiles < ActiveRecord::Migration
  def change
    create_table :gistfiles do |t|
      t.text :body
      t.text :name
      t.integer :gist_id

      t.timestamps
    end
  end
end
