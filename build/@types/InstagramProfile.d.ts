export interface InstagramUser {
    biography: string;
    bio_links: string[];
    biography_with_entities: BiographyWithEntities;
    blocked_by_viewer: boolean;
    restricted_by_viewer: null | boolean;
    country_block: boolean;
    external_url: string | null;
    external_url_linkshimmed: string | null;
    edge_followed_by: UserEdgeFollowedBy | null;
    fbid: string | null;
    followed_by_viewer: boolean;
    edge_follow: UserEdgeFollow;
    follows_viewer: boolean;
    full_name: string;
    group_metadata: any;
    has_ar_effects: boolean;
    has_clips: boolean;
    has_guides: boolean;
    has_channel: boolean;
    has_blocked_viewer: boolean;
    highlight_reel_count: number;
    has_requested_viewer: boolean;
    hide_like_and_view_counts: boolean;
    id: string;
    is_business_account: boolean;
    is_eligible_to_view_account_transparency: boolean;
    is_professional_account: boolean;
    is_supervision_enabled: boolean;
    is_guardian_of_viewer: boolean;
    is_supervised_by_viewer: boolean;
    is_supervised_user: boolean;
    is_embeds_disabled: boolean;
    is_joined_recently: boolean;
    guardian_id: null;
    business_address_json: Object | null;
    business_contact_method: string;
    business_email: string | null;
    business_phone_number: string | null;
    business_category_name: string | null;
    overall_category_name: string | null;
    category_enum: any;
    category_name: string | null;
    is_private: boolean;
    is_verified: boolean;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    requested_by_viewer: boolean;
    should_show_category: boolean;
    should_show_public_contacts: boolean;
    state_controlled_media_country: string | null;
    location_transparency_country: string | null;
    transparency_label: string | null;
    transparency_product: string | null;
    username: string;
    connected_fb_page: string | null;
    pronouns: string[];
}
export declare type BiographyWithEntities = {
    raw_text: string;
    entities: UserEntity[];
};
export declare type UserEntity = {
    user?: {
        username: string | null;
    };
    hashtag?: UserHashtag;
};
export interface UserHashtag {
    name: string;
}
export interface UserEdgeFollowedBy {
    count: number;
}
export interface UserEdgeFollow {
    count: number;
}
export interface InstagramUserPosts {
    items: PostItem[];
    num_results: number;
    more_available: boolean;
    next_max_id: string;
    user: PostUser;
    auto_load_more_enabled: boolean;
    status: string;
}
export interface PostItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    accessibility_caption?: string;
    is_unified_video: boolean;
    should_request_ads: boolean;
    original_media_has_visual_reply_media: boolean;
    caption_is_edited: boolean;
    like_and_view_counts_disabled: boolean;
    commerciality_status: string;
    is_paid_partnership: boolean;
    is_visual_reply_commenter_notice_enabled: boolean;
    has_delayed_metadata: boolean;
    location?: Location;
    lat?: number;
    lng?: number;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    max_num_visible_preview_comments: number;
    has_more_comments: boolean;
    next_max_id?: string;
    preview_comments: PreviewComment[];
    comments: Comment[];
    comment_count: number;
    can_view_more_preview_comments: boolean;
    hide_view_all_comment_entrypoint: boolean;
    inline_composer_display_condition: string;
    photo_of_you: boolean;
    usertags?: Usertags;
    is_organic_product_tagging_eligible: boolean;
    can_see_insights_as_brand: boolean;
    user: PostUser;
    can_viewer_reshare: boolean;
    like_count: number;
    has_liked: boolean;
    top_likers: string[] | null;
    facepile_top_likers: any[] | null;
    image_versions2?: ImageVersions2;
    original_width?: number;
    original_height?: number;
    caption: Caption;
    comment_inform_treatment: CommentInformTreatment;
    sharing_friction_info: SharingFrictionInfo;
    can_viewer_save: boolean;
    is_in_profile_grid: boolean;
    profile_grid_control_enabled: boolean;
    organic_tracking_token: string;
    has_shared_to_fb: number;
    product_type: string;
    deleted_reason: number;
    integrity_review_decision: string;
    commerce_integrity_review_decision: string | null;
    music_metadata?: MusicMetadata;
    is_artist_pick: boolean;
    carousel_media_count?: number;
    carousel_media?: CarouselMedum[];
    is_dash_eligible?: number;
    video_dash_manifest?: string;
    video_codec?: string;
    number_of_qualities?: number;
    video_versions?: VideoVersion[];
    has_audio?: boolean;
    video_duration?: number;
    view_count?: number;
    play_count?: number;
    clips_metadata?: ClipsMetadata;
    media_cropping_info?: MediaCroppingInfo;
    coauthor_producers?: CoauthorProducer[];
    coauthor_producer_can_see_organic_insights: any;
    video_subtitles_confidence?: number;
    video_subtitles_uri?: string;
}
export interface Location {
    pk: string;
    short_name: string;
    facebook_places_id: string;
    external_source: string;
    name: string;
    address: string;
    city: string;
    has_viewer_saved: boolean;
    lng: number;
    lat: number;
    is_eligible_for_guides: boolean;
}
export interface PreviewComment {
    pk: string;
    user_id: string;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    user: PostUser;
    is_covered: boolean;
    is_ranked_comment: boolean;
    media_id: string;
    has_liked_comment: boolean;
    comment_like_count: number;
    private_reply_status: number;
}
export interface User {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface Comment {
    pk: string;
    user_id: string;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    user: PostUser;
    is_covered: boolean;
    is_ranked_comment: boolean;
    media_id: string;
    has_liked_comment: boolean;
    comment_like_count: number;
    private_reply_status: number;
}
export interface User2 {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface Usertags {
    in: In[];
}
export interface In {
    user: PostUser;
    position: number[];
    start_time_in_video_in_sec: any;
    duration_in_video_in_sec: any;
}
export interface User3 {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    friendship_status?: FriendshipStatus;
    is_verified: boolean;
}
export interface FriendshipStatus {
    following: boolean;
    followed_by: boolean;
    blocking: boolean;
    muting: boolean;
    is_private: boolean;
    incoming_request: boolean;
    outgoing_request: boolean;
    is_bestie: boolean;
    is_restricted: boolean;
    is_feed_favorite: boolean;
}
export interface User4 {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    has_anonymous_profile_picture: boolean;
    is_unpublished: boolean;
    is_favorite: boolean;
    has_highlight_reels: boolean;
    transparency_product_enabled: boolean;
    account_badges: any[];
    fan_club_info: FanClubInfo;
    latest_reel_media: number;
}
export interface FanClubInfo {
    fan_club_id: any | null;
    fan_club_name: any | null;
    is_fan_club_referral_eligible: any | null;
    fan_consideration_page_revamp_eligiblity: any | null;
    is_fan_club_gifting_eligible: any | null;
}
export interface ImageVersions2 {
    candidates: Candidate[];
    additional_candidates?: AdditionalCandidates;
    smart_thumbnail_enabled?: boolean;
    animated_thumbnail_spritesheet_info_candidates?: AnimatedThumbnailSpritesheetInfoCandidates;
}
export interface Candidate {
    width: number;
    height: number;
    url: string;
}
export interface AdditionalCandidates {
    igtv_first_frame: IgtvFirstFrame;
    first_frame: FirstFrame;
    smart_frame: any | null;
}
export interface IgtvFirstFrame {
    width: number;
    height: number;
    url: string;
}
export interface FirstFrame {
    width: number;
    height: number;
    url: string;
}
export interface AnimatedThumbnailSpritesheetInfoCandidates {
    default: Default;
}
export interface Default {
    video_length: number;
    thumbnail_width: number;
    thumbnail_height: number;
    thumbnail_duration: number;
    sprite_urls: string[];
    thumbnails_per_row: number;
    total_thumbnail_num_per_sprite: number;
    max_thumbnails_per_sprite: number;
    sprite_width: number;
    sprite_height: number;
    rendered_width: number;
    file_size_kb: number;
}
export interface Caption {
    pk: string;
    user_id: string;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    user: User5;
    is_covered: boolean;
    is_ranked_comment: boolean;
    media_id: string;
    private_reply_status: number;
    has_translation?: boolean;
}
export interface User5 {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface CommentInformTreatment {
    should_have_inform_treatment: boolean;
    text: string;
    url: any;
    action_type: any;
}
export interface SharingFrictionInfo {
    should_have_sharing_friction: boolean;
    bloks_app_url: any;
    sharing_friction_payload: any;
}
export interface MusicMetadata {
    music_canonical_id: string;
    audio_type: any;
    music_info: any;
    original_sound_info: any;
    pinned_media_ids: any;
}
export interface CarouselMedum {
    id: string;
    media_type: number;
    image_versions2: ImageVersions22;
    original_width: number;
    original_height: number;
    accessibility_caption: string;
    pk: string;
    carousel_parent_id: string;
    usertags: Usertags2;
    commerciality_status: string;
    sharing_friction_info: SharingFrictionInfo2;
}
export interface ImageVersions22 {
    candidates: Candidate2[];
}
export interface Candidate2 {
    width: number;
    height: number;
    url: string;
}
export interface Usertags2 {
    in: In2[];
}
export interface In2 {
    user: User6;
    position: number[];
    start_time_in_video_in_sec: any;
    duration_in_video_in_sec: any;
}
export interface User6 {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface SharingFrictionInfo2 {
    should_have_sharing_friction: boolean;
    bloks_app_url: any;
    sharing_friction_payload: any;
}
export interface VideoVersion {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
export interface ClipsMetadata {
    music_info: any;
    original_sound_info: OriginalSoundInfo;
    audio_type: string;
    music_canonical_id: string;
    featured_label: any;
    mashup_info: MashupInfo;
    nux_info: any;
    viewer_interaction_settings: any;
    branded_content_tag_info: BrandedContentTagInfo;
    shopping_info: any;
    additional_audio_info: AdditionalAudioInfo;
    is_shared_to_fb: boolean;
    breaking_content_info: any;
    challenge_info: any;
    reels_on_the_rise_info: any;
    breaking_creator_info: any;
    asset_recommendation_info: any;
    contextual_highlight_info: any;
    clips_creation_entry_point: string;
    audio_ranking_info: AudioRankingInfo;
    template_info: any;
    is_fan_club_promo_video: boolean;
    disable_use_in_clips_client_cache: boolean;
    content_appreciation_info: any;
    show_achievements: boolean;
    show_tips: boolean;
    merchandising_pill_info: any;
    is_public_chat_welcome_video: boolean;
    professional_clips_upsell_type: number;
}
export interface OriginalSoundInfo {
    audio_asset_id: string;
    music_canonical_id: any;
    progressive_download_url: string;
    duration_in_ms: number;
    dash_manifest: string;
    ig_artist: IgArtist;
    should_mute_audio: boolean;
    hide_remixing: boolean;
    original_media_id: string;
    time_created: number;
    original_audio_title: string;
    consumption_info: ConsumptionInfo;
    can_remix_be_shared_to_fb: boolean;
    formatted_clips_media_count: any;
    allow_creator_to_rename: boolean;
    audio_parts: any[];
    is_explicit: boolean;
    original_audio_subtype: string;
    is_audio_automatically_attributed: boolean;
    is_reuse_disabled: boolean;
    is_xpost_from_fb: boolean;
    xpost_fb_creator_info: any;
}
export interface IgArtist {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface ConsumptionInfo {
    is_bookmarked: boolean;
    should_mute_audio_reason: string;
    is_trending_in_clips: boolean;
    should_mute_audio_reason_type: any;
    display_media_id: any;
}
export interface MashupInfo {
    mashups_allowed: boolean;
    can_toggle_mashups_allowed: boolean;
    has_been_mashed_up: boolean;
    formatted_mashups_count: any;
    original_media: any;
    privacy_filtered_mashups_media_count: any;
    non_privacy_filtered_mashups_media_count?: number;
    mashup_type: any;
    is_creator_requesting_mashup: boolean;
    has_nonmimicable_additional_audio: boolean;
}
export interface BrandedContentTagInfo {
    can_add_tag: boolean;
}
export interface AdditionalAudioInfo {
    additional_audio_username: any;
    audio_reattribution_info: AudioReattributionInfo;
}
export interface AudioReattributionInfo {
    should_allow_restore: boolean;
}
export interface AudioRankingInfo {
    best_audio_cluster_id: string;
}
export interface MediaCroppingInfo {
    square_crop: SquareCrop;
}
export interface SquareCrop {
    crop_left: number;
    crop_right: number;
    crop_top: number;
    crop_bottom: number;
}
export interface CoauthorProducer {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface PostUser {
    pk: string;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
