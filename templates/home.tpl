<div class="row home" itemscope itemtype="http://www.schema.org/ItemList">
	<div class="col-lg-9 col-sm-12" no-widget-class="col-lg-12 col-sm-12" no-widget-target="sidebar">
		<div class="row">
			<!-- BEGIN categories -->
			<div class="col-md-12 category-item" data-cid="{categories.cid}" data-numRecentReplies="{categories.numRecentReplies}">
				<meta itemprop="name" content="{categories.name}">

				<div class="category-icon clearfix">
                    <!-- IF categories.link -->
					<a class="col-md-1 col-xs-12" style="color: {categories.color};" href="{categories.link}" itemprop="url" target="_blank">
					<!-- ELSE -->
					<a class="col-md-1 col-xs-12" style="color: {categories.color};" href="{relative_path}/category/{categories.slug}" itemprop="url">
					<!-- ENDIF categories.link -->
						<div
							id="category-{categories.cid}" class="category-header category-header-image-{categories.imageClass}"
							style="
								<!-- IF categories.backgroundImage -->background-image: url({categories.backgroundImage});<!-- ENDIF categories.backgroundImage -->
								<!-- IF categories.bgColor -->background-color: {categories.bgColor};<!-- ENDIF categories.bgColor -->
								color: {categories.color};
							"
						>
							<!-- IF !categories.link -->
							<span class="badge {categories.unread-class}"><i class="fa fa-book" data-toggle="tooltip" title="[[global:topics]]"></i> <span class="human-readable-number" title="{categories.topic_count}">{categories.topic_count}</span>&nbsp; <i class="fa fa-pencil" data-toggle="tooltip" title="[[global:posts]]"></i> <span class="human-readable-number" title="{categories.post_count}">{categories.post_count}</span></span>
							<!-- ENDIF !categories.link -->

							<!-- IF categories.icon -->
							<div><i class="fa {categories.icon} fa-2x"></i></div>
							<!-- ENDIF categories.icon -->
						</div>
					</a>

					<div class="category-box col-md-11 col-xs-12">
						<div class="category-info">
							<!-- IF categories.link -->
							<a href="{categories.link}" itemprop="url" target="_blank">
							<!-- ELSE -->
							<a href="{relative_path}/category/{categories.slug}" itemprop="url">
							<!-- ENDIF categories.link-->
								<h4><!-- IF categories.icon --><i class="fa {categories.icon} visible-xs-inline"></i> <!-- ENDIF categories.icon -->{categories.name}</h4>
							</a>
							<div class="description" itemprop="description">{categories.description}</div>
						</div>
					</div>
				</div>
			</div>
			<!-- END categories -->
		</div>
	</div>

	<div widget-area="sidebar" class="col-lg-3 col-sm-12"></div>
</div>
